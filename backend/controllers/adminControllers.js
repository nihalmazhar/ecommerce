const AdminModel = require('../models/AdminModel')
const CustSupportModel = require('../models/CustomerSupport')

module.exports.get_banners = (req, res) => {
    AdminModel.find()
    .then((banners => res.json(banners)))
}


module.exports.add_banners = (req,res) => {
    const newDoc = new AdminModel(req.body)
    newDoc.save().then((newDoc) => (res.json(newDoc)))
}
module.exports.edit_banners = (req, res) => {
    const DocID = '65fe72210ffefa1141e0c71f'
    const updateData = req.body
    AdminModel.findByIdAndUpdate(DocID, updateData, { new: true })
    .then(updatedItem => {
        res.json(updatedItem);
    })

}

module.exports.get_contactus = (req, res) => {
   CustSupportModel.find()
   .then((message) => res.json(message))
}

module.exports.add_contactus = (req, res) => {
    const newMessage = new CustSupportModel(req.body)
    newMessage.save(). then((message) => res.json(message.json))

}