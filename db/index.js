var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database(':memory:')

db.serialize(function() {
  db.run("CREATE TABLE posts (username TEXT, content TEXT)")

    console.log('In memory database created.')
})

module.exports = {db}