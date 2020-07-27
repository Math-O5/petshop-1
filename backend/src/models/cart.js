const mongoose = require("mongoose");

const cart = new mongoose.Schema(
{
    productId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    }],
    quantity: [{
        type: Number,
        required: true,
        default: 1
    }],
    title: [{
      type: String,
    }],
    price: [{
      type: Number
    }]
  },
  { timestamps: true });

module.exports = mongoose.model("Cart", cart);