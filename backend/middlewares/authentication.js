
const express = require('express');
const app = express();
const config = require('config')
const jwt = require('jsonwebtoken')
const cookie = require("cookie-parser");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookie());

function authentication (req, res, next) {

    if(!req.cookies){console.log(req.cookies)}
    const token = req.cookies.jwtoken;
    console.log(token);
    if(!token){
        res.send('token not present');
        res.redirect('/login')
    }
    
    try{
    const user = jwt.verify(token, config.get('jwtsecret'));
    req.user=user;
    next();
    }
    catch(err) {
        return res.redirect('/');
    }
    
};
module.exports= authentication