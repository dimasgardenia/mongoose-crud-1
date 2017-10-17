const express = require('express')
const router = express.Router()
const Trans = require('../controllers/transactionCont')

router.get('/trans', Trans.viewTrans)
router.post('/trans', Trans.createTrans)
// router.put('/books/:id', Books.updateBook)
// router.delete('/books/:id', Books.deleteBook)

module.exports = router
