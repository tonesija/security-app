const express = require('express')
const cors = require('cors')
var serveStatic = require('serve-static')


const db = require('./db')
const api = require('./api')

const PORT = process.env.PORT || 3000

const app = express()

app.use(serveStatic(__dirname + "/dist"));
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

// link routes
api(app)


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`)
})
