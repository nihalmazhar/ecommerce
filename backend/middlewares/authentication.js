
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const config = require('config')
const jwt = require('jsonwebtoken')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


function authentication(req, res, next) {

    console.log(req.cookies);
    const cookie = req.cookies;
    if (!cookie) { console.log('no cookies') }
    const token = req.cookies.jwtoken;
    console.log(token);
    if (!token) {
        res.send('token not present');

    }

    try {
        const user = jwt.verify(token, config.get('jwtsecret'));
        req.user = user;
        console.log(req.user)
        next();
    }
    catch (err) {
        return res.redirect('/');
    }

};
module.exports = authentication