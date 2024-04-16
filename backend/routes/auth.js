const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { Router } = require("express");
const router = Router();
router.use(cookieParser());

const auth = require("../middlewares/authentication.js");
const authcontroller = require("../controllers/authControllers.js");

router.get("/nihal", (req, res) => {
  res.send("authrouter");
});

router.post("/register", authcontroller.signUp);
router.post("/login", authcontroller.logIn);
router.get("/user", auth, authcontroller.get_User);
module.exports = router;
