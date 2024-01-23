const express = require('express');

const {Router} = require('express');
const router = Router();
const auth = require('../middlewares/authentication.js')
const authcontroller = require('../controllers/authControllers.js')

router.get('/nihal', (req,res)=> {
    res.send('authrouter')
});

router.post('/register', authcontroller.signUp);
router.post('/login', authcontroller.logIn);
router.get('/user', auth, authcontroller.get_User);
module.exports = router