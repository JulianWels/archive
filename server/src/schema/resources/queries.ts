import { GraphQLFieldConfig } from 'graphql'
import { IContext } from '../../utils'

import ResourceType from './ResourceType'

const resourceDomain = process.env.ORIGIN || `localhost:${process.env.PORT || 4000}`
const resourcePath = process.env.STORAGE_URL || 'content/'

const resources: GraphQLFieldConfig<any, any, any> = {
    type: ResourceType,
    description: `Returns information about the location of the actual files.`,
    resolve: async (parent, args, ctx: IContext) => {
        return {
            resourceDomain,
            resourcePath,
        }
    },
}

export default {
    resources,
}
