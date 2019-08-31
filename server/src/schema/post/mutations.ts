import {
    GraphQLBoolean,
    GraphQLFieldConfig,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
} from 'graphql'
import { GraphQLUpload } from 'graphql-upload'
import KeywordModel from '../../models/Keyword'
import PostModel from '../../models/Post'
import { decodeHashIdAndCheck, IContext, InputError, isAuthenticated, to } from '../../utils'
import KeywordType from '../keyword/KeywordType'
import TaskType from '../task/TaskType'
import { Format, Language } from '../types'
import PostType from './PostType'

const uploadPosts: GraphQLFieldConfig<any, any, any> = {
    description: `Creates a new Post`,
    type: new GraphQLNonNull(TaskType),
    args: {
        title: {
            description: `Title of the post.`,
            type: new GraphQLNonNull(GraphQLString),
        },
        caption: {
            description: `Optional caption of what is written or said in the post.`,
            type: GraphQLString,
        },
        language: {
            description: `Language in which title and caption are written in.`,
            type: new GraphQLNonNull(Language),
        },
        type: {
            description: `Optional specification how to treat the uplaoded file. E.g. for turning videos into GIFs and vice versa.`,
            type: Format,
        },
        keywords: {
            description: `Optional keyword-IDs to be associated with that post.`,
            type: new GraphQLList(new GraphQLNonNull(GraphQLID)),
        },
        file: {
            description: `The file.`,
            // @ts-ignore
            type: new GraphQLNonNull(GraphQLUpload),
        },
    },
    resolve: async (parent, fields, context: IContext, resolveInfo) => {
        isAuthenticated(context)

        const [fileErr, file] = await to(fields.file)
        if (!file) {
            throw new InputError(fileErr)
        }

        delete fields.file
        fields.uploaderId = context.auth.userId

        const [error, storeData] = await to(context.fileStorage.checkFile(fields, file.createReadStream()))

        if (error) {
            throw new InputError(error)
        }

        const taskId = await context.fileStorage.storeFile(storeData)
        return context.dataLoaders.task.getById.load(taskId)
    },
}

const editPost: GraphQLFieldConfig<any, any, any> = {
    description: `Edits a post.`,
    type: new GraphQLNonNull(PostType),
    args: {
        id: {
            description: `The ID of the post to edit.`,
            type: new GraphQLNonNull(GraphQLID),
        },
        title: {
            type: GraphQLString,
        },
        keywords: {
            type: new GraphQLList(new GraphQLNonNull(GraphQLID)),
        },
        language: {
            type: Language,
        },
        caption: {
            type: GraphQLString,
        },
    },
    resolve: async (parent, values, context: IContext) => {
        isAuthenticated(context)

        values.id = decodeHashIdAndCheck(PostModel, values.id)

        if (values.keywords) {
            values.keywords = values.keywords.map(stringId => {
                const id = decodeHashIdAndCheck(KeywordModel, stringId)
                return { id }
            })
        }

        const post = await PostModel.query().findById(values.id)
        if (!post) { throw new InputError('There is no post with this ID') }

        const [err, result] = await to(PostModel.query().upsertGraphAndFetch([values], {
            relate: true,
        }))
        if (err) {
            if (err.code === '23503') { throw new InputError('One of the Keywords does not exist.') }
            if (err.name === 'ValidationError') { throw new InputError(err) }
            throw new InputError('Error unknown.')
        }

        return result[0]
    },
}

const deletePosts: GraphQLFieldConfig<any, any, any> = {
    description: `Deletes a post.`,
    type: new GraphQLNonNull(GraphQLBoolean),
    args: {
        ids: {
            description: `The IDs of the posts to delete.`,
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLID))),
        },
    },
    resolve: async (parent, { ids }, context: IContext) => {
        isAuthenticated(context)
        await context.fileStorage.deleteFiles(context.auth.userId, ids)
        return true
    },
}

export default {
    uploadPosts,
    editPost,
    deletePosts,
}
