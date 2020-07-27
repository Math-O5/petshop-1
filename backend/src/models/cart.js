const mongoose = require("mongoose");

const cart = new mongoose.Schema(
  {
    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        title: String,
        price: Number
    }],
  },
  { timestamps: true });

module.exports = mongoose.model("Cart", cart);