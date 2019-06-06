import { GraphQLObjectType } from 'graphql'

import { createKeyword, deleteKeyword } from './Keyword'
import { uploadPosts, deletePost } from './Post'
import { revokeSession } from './Session'
import { signup, login, logout } from './User'

export default new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createKeyword,
        deleteKeyword,
        uploadPosts,
        deletePost,
        revokeSession,
        signup,
        login,
        logout,
    })
})
