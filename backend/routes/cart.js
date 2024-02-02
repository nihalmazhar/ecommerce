const {Router} = require('express');
const router = Router();
const cartController = require('../controllers/cartControllers');

router.get('/cart/:id', cartController.getCartItems);
router.post('/cart/:id', cartController.addCartItems);

router.delete('/cart/:id', cartController.deleteCartItems);

module.exports= router;
