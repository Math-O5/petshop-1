const mongoose = require("mongoose");

const Cart = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
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
        name: String,
        price: Number
    }],
  },
  { timestamps: true });

module.exports = mongoose.model("Cart", Cart);