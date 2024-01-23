const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findone({ email });
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
  res.redirect("/login");
};

module.exports.logIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.send("user doesnt exist");
    return;
  }

  const validpassword = await bcrypt.compare(password, user.password);

  if (validpassword) {
    const token = jwt.sign(user.toJSON(), config.get("jwtsecret"));
    res.cookie("token", token, {
      httpOnly: true,
    });
  }
};

module.exports.get_User = async (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
};
