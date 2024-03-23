const mongoose = require('mongoose')

const AdminSchema  = new mongoose.Schema(
{
        banner:[
           { type : String}
        ]
}
)

const AdminModel = mongoose.model('Admin', AdminSchema)

module.exports = AdminModel