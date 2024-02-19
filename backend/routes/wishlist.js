const {Router} = require('express');
const router = Router();
const wishlistController = require('../controllers/wishlistControllers');

router.get('/wishlist/:id', wishlistController.getListItems);
router.post('/wishlist/:id', wishlistController.addListItems);

router.delete('/wishlist/:id', wishlistController.deleteListItems);

module.exports= router;
