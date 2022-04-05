var express = require('express')
var app = express()
port = 3000

app.locals.pretty = true
app.listen(port, () => {
  console.log("Server has been started")
})