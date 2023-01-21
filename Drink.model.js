const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean,
  containCaffeine: Boolean,
  volume: String,
  drinkDescription: String,
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;