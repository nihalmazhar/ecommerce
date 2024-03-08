const {Router} = require('express');
const router = Router();
const cartController = require('../controllers/cartControllers');

router.get('/cart/:id', cartController.getCartItems);
router.post('/cart/:id', cartController.addCartItems);
router.patch('/cart/:id', cartController.editCartItems);
router.delete('/cart/:id', cartController.deleteCartItems);
router.delete('/cart/delete/:id', cartController.deleteEntireCart);
module.exports= router;
