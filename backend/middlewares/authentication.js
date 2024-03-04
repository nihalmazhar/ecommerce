
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const config = require('config')
const jwt = require('jsonwebtoken')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


function authentication(req, res, next) {

//    console.log(req.body);
//     const cookie = req;
//     console.log('uuuuu',cookie);

//     if (!cookie) { console.log('no cookies') }
//     const token = req.cookies.jwtoken;
//     console.log("token is" , token);
//     if (!token) {
//         res.send('token not present');

const auth = req.headers.authorization;


// Check if token is present
if (!auth) {
    return res.status(401).send('Token not present');
}

       
    

    try {
        const token = auth.slice(7, auth.length);
        
        const user = jwt.verify(token, config.get('jwtsecret'));
        req.user = user;
        
        next();
    }
    catch (err) {
        console.log(err)
    }

}
module.exports = authentication