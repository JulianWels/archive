import DataLoader from 'dataloader'
import { Model, RelationMappings } from 'objection'
import unique from 'objection-unique'
import { ModelId } from '../utils/modelEnum'
import UniqueModel from './UniqueModel'

import Collection from './Collection'
import Post from './Post'

export default class User extends UniqueModel {
    static tableName = 'User'
    static readonly modelId = ModelId.USER

    $unique = {
        fields: ['username'],
        identifiers: ['id'],
    }

    readonly id!: number
    username!: string
    profilePicture: string
    name!: string
    password!: string

    darkmode!: boolean

    telegramid: string

    posts!: Post[]
    collections!: Collection[]

    static async usersByIds(ids: number[]): Promise<User[]> {
        const users = await User.query().findByIds(ids)

        const userMap: { [key: string]: User } = {}
        users.forEach(user => {
            userMap[user.id] = user
        })

        return ids.map(id => userMap[id])
    }

    static async usersByUsername(usernames: string[]): Promise<User[]> {
        const lowerUsernames = usernames.map(name => name.toLowerCase())
        const marks = usernames.map(() => '?').join(',')
        const users = await User.query().whereRaw(
            `lower(username) IN (${marks})`,
            lowerUsernames,
        )

        const userMap: { [key: string]: User } = {}
        users.forEach(user => {
            userMap[user.username.toLowerCase()] = user
        })

        return lowerUsernames.map(username => userMap[username])
    }

    static getLoaders() {
        const getById = new DataLoader<number, User>(this.usersByIds)

        const getByUsername = new DataLoader<string, User>(
            this.usersByUsername,
        )

        return { getById, getByUsername }
    }

    static jsonSchema = {
        type: 'object',
        required: ['username', 'name', 'password'],

        properties: {
            id: { type: 'number' },
            username: { type: 'string', minLength: 2, maxLength: 64 },
            name: { type: 'string', minLength: 2, maxLength: 64 },
            password: { type: 'string', minLength: 5, maxLength: 255 },
        },
    }

    static modelPaths = [__dirname]

    static relationMappings: RelationMappings = {
        posts: {
            relation: Model.HasManyRelation,
            modelClass: 'Post',
            join: {
                from: 'User.id',
                to: 'Post.uploaderId',
            },
        },
        collections: {
            relation: Model.HasManyRelation,
            modelClass: 'Collection',
            join: {
                from: 'User.id',
                to: 'Collection.creatorId',
            },
        },
    }
}
