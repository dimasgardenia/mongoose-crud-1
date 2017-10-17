const express = require('express')
const router = express.Router()
const Books = require('../controllers/bookCont')

router.get('/books', Books.viewBook)
router.post('/books', Books.createBook)
router.put('/books/:id', Books.updateBook)
router.delete('/books/:id', Books.deleteBook)

module.exports = router
