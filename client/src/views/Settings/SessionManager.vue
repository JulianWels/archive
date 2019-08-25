<template>
    <div v-if="userSessions" class="sessionManager itemList itemList-progress">
        <div v-if="errors" class="errorBox">
            <p v-for="(error, i) in errors" :key="i">{{error.message}}</p>
        </div>
        <div v-if="loading" class="indicatorWrapper indicatorWrapper-absolute indicatorWrapper-center">
            <div class="indicator indicator-shadow">
                <Lottie :options="animOptions" />
            </div>
        </div>
        <div v-for="s in sessions" :key="s.id" class="item">
            <div class="indicatorWrapper">
                <div class="indicator">
                    <IconSession />
                </div>
            </div>
            <div class="info">
                <h4>{{s.latestIP}}</h4>
                <p>Last seen: {{s.updatedAt}}</p>
                <h4>Device</h4>
                <p>{{s.browser.name}} on {{s.os.name}}</p>
                <h4>Signed in:</h4>
                <p>{{s.firstIP}} at {{s.createdAt}}</p>
            </div>
            <div class="interaction">
                <button @click="revokeSession(s.id)" class="button">Revoke Session</button>
            </div>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import UAParser from 'ua-parser-js'
import { parseDate } from '@/utils'


import Lottie from '@/components/Lottie'
import * as uploadingAnimation from '@/assets/animations/loading.json'
import IconSession from '@/assets/jw_icons/session.svg?inline'

const SESSION_QUERY = gql`{
  userSessions {
    id
    latestIP
    firstIP
    createdAt
    updatedAt
    userAgent
  }
}`
const REVOKE_SESSION = gql`mutation revokeSession($id: ID!){
    revokeSession(id: $id)
}`

export default {
    name: 'SessionManager',
    data() {
        return {
            errors: null,
            fieldError: [],
            loading: false,
            name: '',
            animOptions: {
                animationData: uploadingAnimation,
            },
        }
    },
    components: { Lottie, IconSession },
    apollo: {
        userSessions: SESSION_QUERY,
    },
    methods: {
        revokeSession(sessionId) {
            if (this.loading) return
            this.errors = null
            this.loading = true
            this.$apollo.mutate({
                mutation: REVOKE_SESSION,
                variables: {
                    id: sessionId,
                },
                refetchQueries: [{ query: SESSION_QUERY }],
            }).then(() => {
                this.loading = false
            }).catch((error) => {
                this.errors = error.networkError.result.errors
                this.loading = false
            })
        },
    },
    computed: {
        sessions() {
            if (!this.userSessions) return []
            return this.userSessions.map(session => {
                const obj = {
                    ...session,
                    ...UAParser(session.userAgent),
                }
                obj.createdAt = parseDate(obj.createdAt)
                obj.updatedAt = parseDate(obj.updatedAt)
                delete obj.userAgent
                return obj
            })
        },
    },
}
</script>