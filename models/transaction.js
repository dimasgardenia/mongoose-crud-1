const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transSchema = new Schema({
  memberid : [{type: Schema.Types.ObjectId, ref: "Customer"}],
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  BookList:[{type: Schema.Types.ObjectId, ref: "Books"}]
})

var Transactions = mongoose.model('Transactions',transSchema)

module.exports = Transactions;
