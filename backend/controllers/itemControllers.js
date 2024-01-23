const Item = require('../models/Product')

module.exports.get_items = (req,res) => {
    item.find().sort({date:-1})
    .then((items) =>res.json(items))
}

module.exports.post_items = (req, res) => {
    const newItem = new Item (req.body);
    newItem.save().then(item => res.json(item))
}

module.exports.edit_items = (req, res) => {
    Item.findByIdAndUpdate({id:req.params.id, },req.body)
    .then(function(item) {Item.findOne({id:req.params.id})
    .then(item => res.json(Item))})
}

module.exports.delete_items = (req, res) => {
    Item.findByIdAndDelete({id:req.params.id}, req.body)
    .then(function(item){
        res.json({success:true})
    })
}

