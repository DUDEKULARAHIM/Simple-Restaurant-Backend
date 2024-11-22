const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  originalPrice: Number,
  discountedPrice: Number,
  quantity: Number,
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  userName: String,
  userPhone: String,
  createdAt: { type: Date, default: Date.now },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
