<template>
    <div class="frame framed collections">
        <header>
            <h1>{{ $t('views.collections') }}</h1>
        </header>

        <nav class="actionBar">
            <Search v-model="search" />
        </nav>

        <div class="content itemList" v-if="collections">
            <router-link
                tag="a"
                v-for="({ node }) in collections.edges"
                :key="node.id"
                :to="{ name: 'Collection', params: { id: node.id }}"
                class="item">
                <CollectionPreview :items="node.posts.edges" />
                <div class="info">
                    <div class="top">{{node.title}}</div>
                    <div class="btm"><UserLink :username="node.creator.username" :profilePicture="node.creator.profilePicture" /> | {{ $tc('items.post', node.posts.totalCount) }}</div>
                </div>
            </router-link>
        </div>
        <button v-if="collections && collections.pageInfo.hasNextPage" @click="showMore" class="button">Show More</button>
    </div>
</template>

<script>
import Search from '@/components/Search'
import UserLink from '@/components/UserLink'
import CollectionPreview from '@/components/CollectionPreview'

import COLLECTIONS_QUERY from '@/graphql/collectionsQuery.gql'
import RESOURCES_QUERY from '@/graphql/resourcesQuery.gql'

export default {
    name: 'Collections',
    components: { Search, UserLink, CollectionPreview },
    data() {
        return {
            columns: 4,
            search: {
                text: '',
            },
        }
    },
    apollo: {
        resources: RESOURCES_QUERY,
        collections: {
            query: COLLECTIONS_QUERY,
            variables() {
                return {
                    byUsername: this.search.text.length > 0 ? this.search.text : null,
                }
            },
            debounce: 500,
        },
    },
    methods: {
        showMore() {
            this.$apollo.queries.collections.fetchMore({
                variables: {
                    after: this.collections.pageInfo.endCursor,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    const newEdges = fetchMoreResult.collections.edges
                    const pageInfo = fetchMoreResult.collections.pageInfo
                    return newEdges.length? {
                        collections: {
                            __typename: previousResult.collections.__typename,
                            edges: [...previousResult.collections.edges, ...newEdges],
                            pageInfo,
                        },
                    } : previousResult
                },
            })
        },
    },
}
</script>