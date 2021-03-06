import {
    GraphQLBoolean,
    GraphQLFieldConfig,
    GraphQLNonNull,
    GraphQLString,
} from 'graphql'
import { GraphQLUpload } from 'graphql-upload'
import Bot from '../../bot'
import User from '../../models/User'
import {
    AuthenticationError,
    AuthorizationError,
    checkAndChangePassword,
    checkAndLogin,
    checkAndSignup,
    IContext,
    InputError,
    isAuthenticated,
    performLogout,
    to,
} from '../../utils'

const signup: GraphQLFieldConfig<any, any, any> = {
    description: `Creates a new user and performs a login.`,
    type: new GraphQLNonNull(GraphQLBoolean),
    args: {
        username: {
            description: `The username used to login.`,
            type: new GraphQLNonNull(GraphQLString),
        },
        name: {
            description: `The user's profile name.`,
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            description: `Password of the user.`,
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: async (parent, args, context: IContext) => {
        if (process.env.CREATE_ACCOUNTS !== 'allowed') {
            throw new AuthorizationError()
        }
        await checkAndSignup(context, args)
        return true
    },
}

const login: GraphQLFieldConfig<any, any, any> = {
    description: `Creates a new session for the user.`,
    type: new GraphQLNonNull(GraphQLBoolean),
    args: {
        username: {
            description: `The username used to login.`,
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            description: `Password of the user.`,
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: async (parent, { username, password }, context: IContext) => {
        const id = await checkAndLogin(context, username, password)
        return true
    },
}

const logout: GraphQLFieldConfig<any, any, any> = {
    description: `Terminates the current users session.`,
    type: new GraphQLNonNull(GraphQLBoolean),
    resolve: async (parent, args, context: IContext) => {
        isAuthenticated(context)
        await performLogout(context)
        return true
    },
}

const linkTelegram: GraphQLFieldConfig<any, any, any> = {
    description: `Associates the Telegram ID of a user with their Archive Profil.`,
    type: new GraphQLNonNull(GraphQLBoolean),
    args: {
        id: {
            description: `Unique id of Telegram user.`,
            type: new GraphQLNonNull(GraphQLString),
        },
        first_name: {
            description: `First Name of Telegram user.`,
            type: GraphQLString,
        },
        last_name: {
            description: `Last name of Telegram user.`,
            type: GraphQLString,
        },
        username: {
            description: `Username of Telegram user.`,
            type: GraphQLString,
        },
        photo_url: {
            description: `Profile photo url of Telegram user.`,
            type: GraphQLString,
        },
        auth_date: {
            description: `Authentication date from telegram request.`,
            type: new GraphQLNonNull(GraphQLString),
        },
        hash: {
            description: `Validation hash from telegram request.`,
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: async (parent, args, context: IContext) => {
        isAuthenticated(context)
        const telegramid = Bot.validateAuth(args)
        const user = await User.query().findById(context.auth.userId)
        if (!user) {
            throw new AuthenticationError(`This should not have happened.`)
        }
        await user.$query().patch({ telegramid })
        return true
    },
}

const unlinkTelegram: GraphQLFieldConfig<any, any, any> = {
    description: `Removed Telegram ID from Archive profile.`,
    type: new GraphQLNonNull(GraphQLBoolean),
    resolve: async (parent, args, context: IContext) => {
        isAuthenticated(context)
        const user = await User.query().findById(context.auth.userId)
        if (!user) {
            throw new AuthenticationError(`This should not have happened.`)
        }
        await user.$query().patch({ telegramid: null })
        return true
    },
}

const uploadProfilePicture: GraphQLFieldConfig<any, any, any> = {
    description: `Sets the profile picture of the current user.`,
    type: new GraphQLNonNull(GraphQLBoolean),
    args: {
        file: {
            description: `Profile picture file.`,
            // @ts-ignore
            type: new GraphQLNonNull(GraphQLUpload),
        },
    },
    resolve: async (parent, args, context: IContext) => {
        isAuthenticated(context)

        const [fileErr, file] = await to(args.file)
        if (!file) {
            throw new InputError(fileErr)
        }

        await context.fileStorage.setProfilePicture(
            context.auth.userId,
            file.createReadStream(),
        )
        return true
    },
}

const clearProfilePicture: GraphQLFieldConfig<any, any, any> = {
    description: `Deletes the profile picture of the current user.`,
    type: new GraphQLNonNull(GraphQLBoolean),
    resolve: async (parent, args, context: IContext) => {
        isAuthenticated(context)
        return context.fileStorage.deleteProfilePicture(context.auth.userId)
    },
}

const changeName: GraphQLFieldConfig<any, any, any> = {
    description: `Changes the name of the current user.`,
    args: {
        newName: {
            description: `New name of the user`,
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    type: new GraphQLNonNull(GraphQLBoolean),
    resolve: async (parent, args, context: IContext) => {
        isAuthenticated(context)

        const user = await User.query().findById(context.auth.userId)
        if (!user) {
            throw new AuthenticationError(`This should not have happened.`)
        }
        await user.$query().patch({ name: args.newName })
        return true
    },
}

const setDarkMode: GraphQLFieldConfig<any, any, any> = {
    description: `Sets the user's dark-mode preference.`,
    args: {
        enabled: {
            description: `Boolean if the user wants dark mode enabled.`,
            type: new GraphQLNonNull(GraphQLBoolean),
        },
    },
    type: new GraphQLNonNull(GraphQLBoolean),
    resolve: async (parent, args, context: IContext) => {
        isAuthenticated(context)

        const user = await User.query().findById(context.auth.userId)
        if (!user) {
            throw new AuthenticationError(`This should not have happened.`)
        }
        await user.$query().patch({ darkmode: args.enabled })
        return true
    },
}

const changePassword: GraphQLFieldConfig<any, any, any> = {
    description: `Changes the password of the current user.`,
    type: new GraphQLNonNull(GraphQLBoolean),
    args: {
        oldPassword: {
            description: `Current password of the user`,
            type: new GraphQLNonNull(GraphQLString),
        },
        newPassword: {
            description: `New password of the user.`,
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: async (parent, args, context: IContext) => {
        return checkAndChangePassword(context, args)
    },
}

export default {
    signup,
    login,
    logout,
    linkTelegram,
    unlinkTelegram,
    uploadProfilePicture,
    clearProfilePicture,
    changeName,
    setDarkMode,
    changePassword,
}
