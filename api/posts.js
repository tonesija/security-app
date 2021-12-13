const {db} = require('../db')

async function getPosts(req, res) {
    let contentQuery = req.query.q || ''
    let sqlInjection = req.query.sql

    let sql = 'SELECT * FROM posts'

    if (contentQuery != '')
        sql = `SELECT * FROM posts WHERE content LIKE \'${"%"+contentQuery+"%"}\'`
    if (sqlInjection == "false") {
        sql = 'SELECT * FROM posts WHERE content LIKE ?'
    }

    console.log("sql:", sql)
    
    if (sqlInjection == 'false')
        db.all(sql, ['%' + contentQuery + '%'], (err, rows) => {
            res.send(rows)
        })
    else {
        db.all(sql, [], (err, rows) => {
            console.log("->", err)
            if (err != null) {
                res.send([{username: err.code, content: err.code}])
            } else {
                res.send(rows)
            }
        })
    }
}

async function createPost(req, res) {
    db.run("INSERT INTO posts VALUES (?, ?)", [req.body.username, req.body.content])
    res.status(201)
    res.send("Created post.")
}



module.exports = {getPosts, createPost}