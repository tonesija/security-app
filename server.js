const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res) => {
  res.send("Hello world!")
})


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`)
})
