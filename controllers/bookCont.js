const dbBook = require('../models/books')

let viewBook = (req, res) => {
  dbBook.find(function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

let createBook = (req, res) => {
  dbBook.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }, function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

let updateBook = (req, res) => {
  dbBook.update({
    _id: req.params.id
  }, {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }, function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

let deleteBook = (req, res) => {
  dbBook.remove({
    _id: req.params.id
  }, function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

module.exports = {
  viewBook,
  createBook,
  updateBook,
  deleteBook
}
