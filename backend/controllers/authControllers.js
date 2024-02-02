const express = require("express");

const app = express();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const cookie = require("cookie-parser");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookie());

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
        httpOnly: true,
      });
      res.send('successful')
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.get_User = async (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
};
