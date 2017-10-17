const express = require('express')
const router = express.Router()
const Cust = require('../controllers/custCont')

router.get('/cust', Cust.viewCust)
router.post('/cust', Cust.createCust)
router.put('/cust/:id', Cust.updateCust)
router.delete('/cust/:id', Cust.deleteCust)

module.exports = router
