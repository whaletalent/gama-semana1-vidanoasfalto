const express = require('express')
const bodyPaser = require('body-parser')
const app = express()
app.use(bodyPaser.urlencoded({
    extended: true
}))
app.use(require('./routes'))


app.listen(3333)