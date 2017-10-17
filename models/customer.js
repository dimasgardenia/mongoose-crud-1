const mongoose = require('mongoose')
const Schema = mongoose.Schema

let CustSchema = new Schema({
  name : String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: Number
})

var Customer = mongoose.model('Customer', CustSchema)

module.exports = Customer
