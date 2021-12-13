const { createPost, getPosts } = require("./posts")

// link endpoints to handlers
module.exports = (app) => {
    app.get('/posts', getPosts)

    app.post('/posts', createPost)

    console.log('Routes linked.')
}