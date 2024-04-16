const Item = require("../models/Product");

module.exports.get_items = (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
};

module.exports.add_items = (req, res) => {
  const newItem = new Item(req.body);
  newItem.save().then((item) => res.json(item));
};

module.exports.edit_items = (req, res) => {
  const itemId = req.params.id;
  const updateData = req.body;
  Item.findByIdAndUpdate(itemId, updateData, { new: true }).then(
    (updatedItem) => {
      res.json(updatedItem);
    }
  );
  // .then(function(item) {Item.findOne({id:req.params.id})
  // .then(item => res.json(Item))})
};

module.exports.delete_items = (req, res) => {
  const itemId = req.params.id;
  Item.findByIdAndDelete(itemId).then(function (item) {
    res.json({ success: true });
  });
};
