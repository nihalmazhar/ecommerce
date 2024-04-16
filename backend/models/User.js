const mongoose = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please enter an email"],
    unique: true,
    lowercase: true,
    Validate: [isEmail, "please enter your email"],
  },

  password: {
    type: String,
    required: true,
    minlength: [6, "please enter password with atleast 6 characters"],
  },

  register_date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
