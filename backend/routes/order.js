
const express = require('express')
const{Router} = require('express');

const router = Router();
const orderController = require('../controllers/orderControllers')



router.get('/orders/:id', orderController.getOrder);
router.post('/orders/:id', orderController.checkout);

module.exports = router