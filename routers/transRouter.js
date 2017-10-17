const express = require('express')
const router = express.Router()
const Trans = require('../controllers/transactionCont')

router.get('/trans', Trans.viewTrans)
router.post('/trans', Trans.createTrans)
router.put('/trans/:id', Trans.editTrans)
router.delete('/trans/:id', Trans.deleteTrans)

module.exports = router
