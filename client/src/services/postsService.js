import api from './api'

export default {
    async getPosts(q, sql) {
        return api().get('/posts', {params: {q: q, sql: sql}})
    },

    async createPost(username, content) {
        return api().post('/posts', {username: username, content: content})
    }
}