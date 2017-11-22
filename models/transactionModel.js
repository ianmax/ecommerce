const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var transactionSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  totalprice: { type: Number, required: true },
  items: [{ type: Schema.Types.ObjectId, ref: 'items' }],
});

var transaction = mongoose.model('transaction', transactionSchema);

module.exports = transaction;
