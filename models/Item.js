var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number

}, { timestamps: true });

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
