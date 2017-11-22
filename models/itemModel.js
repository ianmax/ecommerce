// const mongoose = require('mongoose').connect('mongodb://localhost/ecommerce');
const mongoose = require('mongoose');

let itemSchema = mongoose.Schema({
  name: String,
  image: String,
  stock: Number,
  price: Number,
  description: String,
  category: String,
  subcategory: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

let itemModel = mongoose.model('Item', itemSchema);

module.exports = itemModel;
