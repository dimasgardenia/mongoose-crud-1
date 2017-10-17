const mongoose = require('mongoose')
const Schema = mongoose.Schema

let BooksSchema = new Schema({
  isbn : String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

var Books = mongoose.model('Books', BooksSchema)

module.exports = Books
