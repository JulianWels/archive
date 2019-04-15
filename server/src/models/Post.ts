import { Model, RelationMappings } from 'objection';
import BaseModel from './BaseModel'

import User from './User'
import Keyword from './Keyword'


export default class Post extends BaseModel {
    static tableName = 'Post';

    readonly id!: string;
    title!: string;
    type!: string;
    originalPath?: string;
    thumbnailPath?: string;
    uploader?: User;
    keywords: Keyword[];
    caption?: string;


    static jsonSchema = {
        type: 'object',
        required: ['name'],

        properties: {
            id: { type: 'string' },
            title: { type: 'string', minLength: 4, maxLength: 255 },
            type: { type: 'string', enum: ['VIDEO', 'IMAGE', 'GIF'] },
            originalPath: { type: ['string', 'null'], minLength: 2, maxLength: 64 },
            thumbnailPath: { type: ['string', 'null'], minLength: 2, maxLength: 64 },
            uploader: { type: ['string', 'null'], minLength: 2, maxLength: 64 },
            caption: { type: ['string', 'null'], minLength: 2, maxLength: 64 },
        }
    };

    static modelPaths = [__dirname];

    static relationMappings: RelationMappings = {
        uploader: {
            relation: Model.BelongsToOneRelation,
            modelClass: 'User',
            join: {
                from: 'Post.uploader',
                to: 'User.id',
            },
        },
        keywords: {
            relation: Model.ManyToManyRelation,
            modelClass: 'Keyword',
            join: {
                from: 'Post.id',
                through: {
                    from: 'KeywordToPost.post_id',
                    to: 'KeywordToPost.keyword_id'
                },
                to: 'Keyword.id'
            }
        },
    }
}