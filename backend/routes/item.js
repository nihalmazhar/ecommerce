const { Router } = require("express");
const router = Router();
const itemcontroller = require("../controllers/itemControllers.js");

router.get("/items", itemcontroller.get_items);
router.post("/items", itemcontroller.add_items);
router.put("/items/:id", itemcontroller.edit_items);
router.delete("/items/:id", itemcontroller.delete_items);

module.exports = router;
