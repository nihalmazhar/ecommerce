const {Router} = require('express');
const router = Router();
const adminController = require('../controllers/adminControllers.js');

router.get('/banners', adminController.get_banners);
router.post('/banners', adminController.add_banners);
router.put('/banners', adminController.edit_banners);
// router.delete('/banners', itemcontroller.banners);

router.get('/contactus', adminController.get_contactus);
router.post('/contactus', adminController.add_contactus);



module.exports = router
