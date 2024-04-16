const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: {
    type: String,
  },

  name: { type: String },

  email: { type: String },

  phoneNumber: { type: String },

  address: {
    city: { type: String },
    country: { type: String },
    line1: { type: String },
    line2: { type: String },
    postal_code: { type: String },
    state: { type: String },
  },
  items: [
    {
      productId: {
        type: String,
      },
      name: {
        type: String,
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity can not be less then 1."],
      },
      price: Number,
    },
  ],
  bill: {
    type: Number,
    required: true,
  },

  subtotal: { type: Number },

  discount: { type: Number },

  date_added: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Order = mongoose.model("order", OrderSchema);
