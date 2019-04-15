// Code generated by Prisma (prisma@1.29.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  keyword: (where?: KeywordWhereInput) => Promise<boolean>;
  post: (where?: PostWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  keyword: (where: KeywordWhereUniqueInput) => KeywordPromise;
  keywords: (
    args?: {
      where?: KeywordWhereInput;
      orderBy?: KeywordOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Keyword>;
  keywordsConnection: (
    args?: {
      where?: KeywordWhereInput;
      orderBy?: KeywordOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => KeywordConnectionPromise;
  post: (where: PostWhereUniqueInput) => PostPromise;
  posts: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Post>;
  postsConnection: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PostConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createKeyword: (data: KeywordCreateInput) => KeywordPromise;
  updateKeyword: (
    args: { data: KeywordUpdateInput; where: KeywordWhereUniqueInput }
  ) => KeywordPromise;
  updateManyKeywords: (
    args: { data: KeywordUpdateManyMutationInput; where?: KeywordWhereInput }
  ) => BatchPayloadPromise;
  upsertKeyword: (
    args: {
      where: KeywordWhereUniqueInput;
      create: KeywordCreateInput;
      update: KeywordUpdateInput;
    }
  ) => KeywordPromise;
  deleteKeyword: (where: KeywordWhereUniqueInput) => KeywordPromise;
  deleteManyKeywords: (where?: KeywordWhereInput) => BatchPayloadPromise;
  createPost: (data: PostCreateInput) => PostPromise;
  updatePost: (
    args: { data: PostUpdateInput; where: PostWhereUniqueInput }
  ) => PostPromise;
  updateManyPosts: (
    args: { data: PostUpdateManyMutationInput; where?: PostWhereInput }
  ) => BatchPayloadPromise;
  upsertPost: (
    args: {
      where: PostWhereUniqueInput;
      create: PostCreateInput;
      update: PostUpdateInput;
    }
  ) => PostPromise;
  deletePost: (where: PostWhereUniqueInput) => PostPromise;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  keyword: (
    where?: KeywordSubscriptionWhereInput
  ) => KeywordSubscriptionPayloadSubscription;
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Format = "VIDEO" | "IMAGE" | "GIF";

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "created_ASC"
  | "created_DESC"
  | "type_ASC"
  | "type_DESC"
  | "originalPath_ASC"
  | "originalPath_DESC"
  | "thumbnailPath_ASC"
  | "thumbnailPath_DESC"
  | "caption_ASC"
  | "caption_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type KeywordOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "username_ASC"
  | "username_DESC"
  | "name_ASC"
  | "name_DESC"
  | "password_ASC"
  | "password_DESC"
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type KeywordWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PostWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  created?: DateTimeInput;
  created_not?: DateTimeInput;
  created_in?: DateTimeInput[] | DateTimeInput;
  created_not_in?: DateTimeInput[] | DateTimeInput;
  created_lt?: DateTimeInput;
  created_lte?: DateTimeInput;
  created_gt?: DateTimeInput;
  created_gte?: DateTimeInput;
  keywords_every?: KeywordWhereInput;
  keywords_some?: KeywordWhereInput;
  keywords_none?: KeywordWhereInput;
  type?: Format;
  type_not?: Format;
  type_in?: Format[] | Format;
  type_not_in?: Format[] | Format;
  originalPath?: String;
  originalPath_not?: String;
  originalPath_in?: String[] | String;
  originalPath_not_in?: String[] | String;
  originalPath_lt?: String;
  originalPath_lte?: String;
  originalPath_gt?: String;
  originalPath_gte?: String;
  originalPath_contains?: String;
  originalPath_not_contains?: String;
  originalPath_starts_with?: String;
  originalPath_not_starts_with?: String;
  originalPath_ends_with?: String;
  originalPath_not_ends_with?: String;
  thumbnailPath?: String;
  thumbnailPath_not?: String;
  thumbnailPath_in?: String[] | String;
  thumbnailPath_not_in?: String[] | String;
  thumbnailPath_lt?: String;
  thumbnailPath_lte?: String;
  thumbnailPath_gt?: String;
  thumbnailPath_gte?: String;
  thumbnailPath_contains?: String;
  thumbnailPath_not_contains?: String;
  thumbnailPath_starts_with?: String;
  thumbnailPath_not_starts_with?: String;
  thumbnailPath_ends_with?: String;
  thumbnailPath_not_ends_with?: String;
  uploader?: UserWhereInput;
  caption?: String;
  caption_not?: String;
  caption_in?: String[] | String;
  caption_not_in?: String[] | String;
  caption_lt?: String;
  caption_lte?: String;
  caption_gt?: String;
  caption_gte?: String;
  caption_contains?: String;
  caption_not_contains?: String;
  caption_starts_with?: String;
  caption_not_starts_with?: String;
  caption_ends_with?: String;
  caption_not_ends_with?: String;
  AND?: PostWhereInput[] | PostWhereInput;
  OR?: PostWhereInput[] | PostWhereInput;
  NOT?: PostWhereInput[] | PostWhereInput;
}

export interface KeywordWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  posts_every?: PostWhereInput;
  posts_some?: PostWhereInput;
  posts_none?: PostWhereInput;
  AND?: KeywordWhereInput[] | KeywordWhereInput;
  OR?: KeywordWhereInput[] | KeywordWhereInput;
  NOT?: KeywordWhereInput[] | KeywordWhereInput;
}

export interface UserWhereInput {
  username?: String;
  username_not?: String;
  username_in?: String[] | String;
  username_not_in?: String[] | String;
  username_lt?: String;
  username_lte?: String;
  username_gt?: String;
  username_gte?: String;
  username_contains?: String;
  username_not_contains?: String;
  username_starts_with?: String;
  username_not_starts_with?: String;
  username_ends_with?: String;
  username_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type PostWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  username: String;
}>;

export interface KeywordCreateInput {
  name: String;
  posts?: PostCreateManyWithoutKeywordsInput;
}

export interface PostCreateManyWithoutKeywordsInput {
  create?: PostCreateWithoutKeywordsInput[] | PostCreateWithoutKeywordsInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
}

export interface PostCreateWithoutKeywordsInput {
  title: String;
  created: DateTimeInput;
  type: Format;
  originalPath: String;
  thumbnailPath: String;
  uploader?: UserCreateOneInput;
  caption?: String;
}

export interface UserCreateOneInput {
  create?: UserCreateInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateInput {
  username: String;
  name: String;
  password: String;
}

export interface KeywordUpdateInput {
  name?: String;
  posts?: PostUpdateManyWithoutKeywordsInput;
}

export interface PostUpdateManyWithoutKeywordsInput {
  create?: PostCreateWithoutKeywordsInput[] | PostCreateWithoutKeywordsInput;
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  set?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  update?:
    | PostUpdateWithWhereUniqueWithoutKeywordsInput[]
    | PostUpdateWithWhereUniqueWithoutKeywordsInput;
  upsert?:
    | PostUpsertWithWhereUniqueWithoutKeywordsInput[]
    | PostUpsertWithWhereUniqueWithoutKeywordsInput;
  deleteMany?: PostScalarWhereInput[] | PostScalarWhereInput;
  updateMany?:
    | PostUpdateManyWithWhereNestedInput[]
    | PostUpdateManyWithWhereNestedInput;
}

export interface PostUpdateWithWhereUniqueWithoutKeywordsInput {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutKeywordsDataInput;
}

export interface PostUpdateWithoutKeywordsDataInput {
  title?: String;
  created?: DateTimeInput;
  type?: Format;
  originalPath?: String;
  thumbnailPath?: String;
  uploader?: UserUpdateOneInput;
  caption?: String;
}

export interface UserUpdateOneInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateDataInput {
  username?: String;
  name?: String;
  password?: String;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface PostUpsertWithWhereUniqueWithoutKeywordsInput {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutKeywordsDataInput;
  create: PostCreateWithoutKeywordsInput;
}

export interface PostScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  created?: DateTimeInput;
  created_not?: DateTimeInput;
  created_in?: DateTimeInput[] | DateTimeInput;
  created_not_in?: DateTimeInput[] | DateTimeInput;
  created_lt?: DateTimeInput;
  created_lte?: DateTimeInput;
  created_gt?: DateTimeInput;
  created_gte?: DateTimeInput;
  type?: Format;
  type_not?: Format;
  type_in?: Format[] | Format;
  type_not_in?: Format[] | Format;
  originalPath?: String;
  originalPath_not?: String;
  originalPath_in?: String[] | String;
  originalPath_not_in?: String[] | String;
  originalPath_lt?: String;
  originalPath_lte?: String;
  originalPath_gt?: String;
  originalPath_gte?: String;
  originalPath_contains?: String;
  originalPath_not_contains?: String;
  originalPath_starts_with?: String;
  originalPath_not_starts_with?: String;
  originalPath_ends_with?: String;
  originalPath_not_ends_with?: String;
  thumbnailPath?: String;
  thumbnailPath_not?: String;
  thumbnailPath_in?: String[] | String;
  thumbnailPath_not_in?: String[] | String;
  thumbnailPath_lt?: String;
  thumbnailPath_lte?: String;
  thumbnailPath_gt?: String;
  thumbnailPath_gte?: String;
  thumbnailPath_contains?: String;
  thumbnailPath_not_contains?: String;
  thumbnailPath_starts_with?: String;
  thumbnailPath_not_starts_with?: String;
  thumbnailPath_ends_with?: String;
  thumbnailPath_not_ends_with?: String;
  caption?: String;
  caption_not?: String;
  caption_in?: String[] | String;
  caption_not_in?: String[] | String;
  caption_lt?: String;
  caption_lte?: String;
  caption_gt?: String;
  caption_gte?: String;
  caption_contains?: String;
  caption_not_contains?: String;
  caption_starts_with?: String;
  caption_not_starts_with?: String;
  caption_ends_with?: String;
  caption_not_ends_with?: String;
  AND?: PostScalarWhereInput[] | PostScalarWhereInput;
  OR?: PostScalarWhereInput[] | PostScalarWhereInput;
  NOT?: PostScalarWhereInput[] | PostScalarWhereInput;
}

export interface PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput;
  data: PostUpdateManyDataInput;
}

export interface PostUpdateManyDataInput {
  title?: String;
  created?: DateTimeInput;
  type?: Format;
  originalPath?: String;
  thumbnailPath?: String;
  caption?: String;
}

export interface KeywordUpdateManyMutationInput {
  name?: String;
}

export interface PostCreateInput {
  title: String;
  created: DateTimeInput;
  keywords?: KeywordCreateManyWithoutPostsInput;
  type: Format;
  originalPath: String;
  thumbnailPath: String;
  uploader?: UserCreateOneInput;
  caption?: String;
}

export interface KeywordCreateManyWithoutPostsInput {
  create?: KeywordCreateWithoutPostsInput[] | KeywordCreateWithoutPostsInput;
  connect?: KeywordWhereUniqueInput[] | KeywordWhereUniqueInput;
}

export interface KeywordCreateWithoutPostsInput {
  name: String;
}

export interface PostUpdateInput {
  title?: String;
  created?: DateTimeInput;
  keywords?: KeywordUpdateManyWithoutPostsInput;
  type?: Format;
  originalPath?: String;
  thumbnailPath?: String;
  uploader?: UserUpdateOneInput;
  caption?: String;
}

export interface KeywordUpdateManyWithoutPostsInput {
  create?: KeywordCreateWithoutPostsInput[] | KeywordCreateWithoutPostsInput;
  delete?: KeywordWhereUniqueInput[] | KeywordWhereUniqueInput;
  connect?: KeywordWhereUniqueInput[] | KeywordWhereUniqueInput;
  set?: KeywordWhereUniqueInput[] | KeywordWhereUniqueInput;
  disconnect?: KeywordWhereUniqueInput[] | KeywordWhereUniqueInput;
  update?:
    | KeywordUpdateWithWhereUniqueWithoutPostsInput[]
    | KeywordUpdateWithWhereUniqueWithoutPostsInput;
  upsert?:
    | KeywordUpsertWithWhereUniqueWithoutPostsInput[]
    | KeywordUpsertWithWhereUniqueWithoutPostsInput;
  deleteMany?: KeywordScalarWhereInput[] | KeywordScalarWhereInput;
  updateMany?:
    | KeywordUpdateManyWithWhereNestedInput[]
    | KeywordUpdateManyWithWhereNestedInput;
}

export interface KeywordUpdateWithWhereUniqueWithoutPostsInput {
  where: KeywordWhereUniqueInput;
  data: KeywordUpdateWithoutPostsDataInput;
}

export interface KeywordUpdateWithoutPostsDataInput {
  name?: String;
}

export interface KeywordUpsertWithWhereUniqueWithoutPostsInput {
  where: KeywordWhereUniqueInput;
  update: KeywordUpdateWithoutPostsDataInput;
  create: KeywordCreateWithoutPostsInput;
}

export interface KeywordScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: KeywordScalarWhereInput[] | KeywordScalarWhereInput;
  OR?: KeywordScalarWhereInput[] | KeywordScalarWhereInput;
  NOT?: KeywordScalarWhereInput[] | KeywordScalarWhereInput;
}

export interface KeywordUpdateManyWithWhereNestedInput {
  where: KeywordScalarWhereInput;
  data: KeywordUpdateManyDataInput;
}

export interface KeywordUpdateManyDataInput {
  name?: String;
}

export interface PostUpdateManyMutationInput {
  title?: String;
  created?: DateTimeInput;
  type?: Format;
  originalPath?: String;
  thumbnailPath?: String;
  caption?: String;
}

export interface UserUpdateInput {
  username?: String;
  name?: String;
  password?: String;
}

export interface UserUpdateManyMutationInput {
  username?: String;
  name?: String;
  password?: String;
}

export interface KeywordSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: KeywordWhereInput;
  AND?: KeywordSubscriptionWhereInput[] | KeywordSubscriptionWhereInput;
  OR?: KeywordSubscriptionWhereInput[] | KeywordSubscriptionWhereInput;
  NOT?: KeywordSubscriptionWhereInput[] | KeywordSubscriptionWhereInput;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PostWhereInput;
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Keyword {
  id: ID_Output;
  name: String;
}

export interface KeywordPromise extends Promise<Keyword>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  posts: <T = FragmentableArray<Post>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface KeywordSubscription
  extends Promise<AsyncIterator<Keyword>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  posts: <T = Promise<AsyncIterator<PostSubscription>>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface Post {
  id: ID_Output;
  title: String;
  created: DateTimeOutput;
  type: Format;
  originalPath: String;
  thumbnailPath: String;
  caption?: String;
}

export interface PostPromise extends Promise<Post>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  created: () => Promise<DateTimeOutput>;
  keywords: <T = FragmentableArray<Keyword>>(
    args?: {
      where?: KeywordWhereInput;
      orderBy?: KeywordOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  type: () => Promise<Format>;
  originalPath: () => Promise<String>;
  thumbnailPath: () => Promise<String>;
  uploader: <T = UserPromise>() => T;
  caption: () => Promise<String>;
}

export interface PostSubscription
  extends Promise<AsyncIterator<Post>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  created: () => Promise<AsyncIterator<DateTimeOutput>>;
  keywords: <T = Promise<AsyncIterator<KeywordSubscription>>>(
    args?: {
      where?: KeywordWhereInput;
      orderBy?: KeywordOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  type: () => Promise<AsyncIterator<Format>>;
  originalPath: () => Promise<AsyncIterator<String>>;
  thumbnailPath: () => Promise<AsyncIterator<String>>;
  uploader: <T = UserSubscription>() => T;
  caption: () => Promise<AsyncIterator<String>>;
}

export interface User {
  username: String;
  name: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  username: () => Promise<String>;
  name: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  username: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface KeywordConnection {
  pageInfo: PageInfo;
  edges: KeywordEdge[];
}

export interface KeywordConnectionPromise
  extends Promise<KeywordConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<KeywordEdge>>() => T;
  aggregate: <T = AggregateKeywordPromise>() => T;
}

export interface KeywordConnectionSubscription
  extends Promise<AsyncIterator<KeywordConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<KeywordEdgeSubscription>>>() => T;
  aggregate: <T = AggregateKeywordSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface KeywordEdge {
  node: Keyword;
  cursor: String;
}

export interface KeywordEdgePromise extends Promise<KeywordEdge>, Fragmentable {
  node: <T = KeywordPromise>() => T;
  cursor: () => Promise<String>;
}

export interface KeywordEdgeSubscription
  extends Promise<AsyncIterator<KeywordEdge>>,
    Fragmentable {
  node: <T = KeywordSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateKeyword {
  count: Int;
}

export interface AggregateKeywordPromise
  extends Promise<AggregateKeyword>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateKeywordSubscription
  extends Promise<AsyncIterator<AggregateKeyword>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PostConnection {
  pageInfo: PageInfo;
  edges: PostEdge[];
}

export interface PostConnectionPromise
  extends Promise<PostConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PostEdge>>() => T;
  aggregate: <T = AggregatePostPromise>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface PostEdge {
  node: Post;
  cursor: String;
}

export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
  node: <T = PostPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdge>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePost {
  count: Int;
}

export interface AggregatePostPromise
  extends Promise<AggregatePost>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePost>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface KeywordSubscriptionPayload {
  mutation: MutationType;
  node: Keyword;
  updatedFields: String[];
  previousValues: KeywordPreviousValues;
}

export interface KeywordSubscriptionPayloadPromise
  extends Promise<KeywordSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = KeywordPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = KeywordPreviousValuesPromise>() => T;
}

export interface KeywordSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<KeywordSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = KeywordSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = KeywordPreviousValuesSubscription>() => T;
}

export interface KeywordPreviousValues {
  id: ID_Output;
  name: String;
}

export interface KeywordPreviousValuesPromise
  extends Promise<KeywordPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface KeywordPreviousValuesSubscription
  extends Promise<AsyncIterator<KeywordPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface PostSubscriptionPayload {
  mutation: MutationType;
  node: Post;
  updatedFields: String[];
  previousValues: PostPreviousValues;
}

export interface PostSubscriptionPayloadPromise
  extends Promise<PostSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PostPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValuesPromise>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface PostPreviousValues {
  id: ID_Output;
  title: String;
  created: DateTimeOutput;
  type: Format;
  originalPath: String;
  thumbnailPath: String;
  caption?: String;
}

export interface PostPreviousValuesPromise
  extends Promise<PostPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  created: () => Promise<DateTimeOutput>;
  type: () => Promise<Format>;
  originalPath: () => Promise<String>;
  thumbnailPath: () => Promise<String>;
  caption: () => Promise<String>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  created: () => Promise<AsyncIterator<DateTimeOutput>>;
  type: () => Promise<AsyncIterator<Format>>;
  originalPath: () => Promise<AsyncIterator<String>>;
  thumbnailPath: () => Promise<AsyncIterator<String>>;
  caption: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  username: String;
  name: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  username: () => Promise<String>;
  name: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  username: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Keyword",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Format",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();