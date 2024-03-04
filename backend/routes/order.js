
const express = require('express')
const{Router} = require('express');

const router = Router();
const orderController = require('../controllers/orderControllers')



router.get('/order/:id', orderController.getOrder);
router.post('/order/:id', orderController.checkout);

module.exports = router