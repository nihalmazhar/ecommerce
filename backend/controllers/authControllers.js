const express = require("express");

const app = express();
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

app.use(express.urlencoded({ extended: true }));


module.exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.send("user already exists");
    return;
  }

  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    email,
    password: hash,
  });
  await user.save();
  res.send("success");
};

module.exports.logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(req.body);

    if (!user) {
      res.send("user doesnt exist");
      return;
    }

    const validpassword = await bcrypt.compare(password, user.password);

    if (validpassword) {
      const token = jwt.sign(user.toJSON(), config.get("jwtsecret"));
      res.cookie("jwtoken", token, {
        httpOnly: false,
      });
      res.send("successful");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.get_User = async (req, res) => {
  
  const userId = req.user._id;
  console.log(userId);
  try {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
