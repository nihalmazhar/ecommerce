const config = require('config')
const jwt = require('jsonwebtoken')

function authentication (req, res, next) {
    const token = req.cookies.token;
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