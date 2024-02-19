const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  images: [ { type: String } ],

  seller:{
    type:String
  },

  brand:{
    type:String,
    required:true
  },

  partNumber:{type:String,
    required:true},

  date_added: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;