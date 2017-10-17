const dbTrans = require('../models/transaction')

let viewTrans = (req, res) => {
  dbTrans.find({})
  .populate('Books')
  .populate('Customer')
  .exec(function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

let createTrans = (req, res) => {
  dbTrans.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    BookList: req.body.BookList
  }, function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

module.exports = {
  viewTrans,
  createTrans
}
