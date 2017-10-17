const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let books = require('./routers/bookRouter')
let customer = require('./routers/custRouter')
let transaction = require('./routers/transRouter')

app.use('/api', books)
app.use('/api', customer)
app.use('/api', transaction)

app.listen(process.env.Port || 3000, ()=>{
  console.log('i am running at port 3000');
})
