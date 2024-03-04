
const express = require('express')
const{Router} = require('express');

const router = Router();
const webhookControllers = require('../controllers/webhookControllers')



router.post('/webhook', webhookControllers.webhook);

module.exports = router