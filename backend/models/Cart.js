const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  items: [
    {
      productId: {
        type: String,
        required: true,
        ref: "user",
      },

      name: {
        type: String,
        required: true,
        ref: "item",
      },

      image: {
        type: String,
      },

      partNumber: {
        type: String,
      },

      brand: {
        type: String,
      },

      quantity: {
        type: Number,
        min: [1, "Qauntity cannot be less than 1"],
        default: 1,
      },

      price: {
        type: Number,
        required: true,
      },
    },
  ],

  bill: {
    type: Number,
    required: true,
    default: true,
  },
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
