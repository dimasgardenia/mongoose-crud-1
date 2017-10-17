const dbCustomer = require('../models/customer')

let viewCust = (req, res) => {
  dbCustomer.find(function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

let createCust = (req, res) => {
  dbCustomer.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }, function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

let updateCust = (req, res) => {
  dbCustomer.update({
    _id: req.params.id
  }, {
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  }, function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

let deleteCust = (req, res) => {
  dbCustomer.remove({
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
  viewCust,
  createCust,
  updateCust,
  deleteCust
}
