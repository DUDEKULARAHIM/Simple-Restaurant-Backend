const express = require("express");
const Cart = require("../models/cartModel");

const router = express.Router();

// POST route to save the cart with user information
router.post("/cart", async (req, res) => {
  try {
    const { items, name, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ message: "Name and phone are required!" });
    }

    const cart = new Cart({
      items,
      userName: name,
      userPhone: phone,
    });

    await cart.save();
    res.status(200).json({ message: "Cart saved successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error saving cart", error: err.message });
  }
});

module.exports = router;
