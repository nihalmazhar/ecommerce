const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true
        },

        items: [
            {
                productId: {
                    type: String,
                    required: true,
                    ref: "user"
                },
                name: {
                    type: String,
                    required: true,
                    ref:"item",
                },

                price: {
                    type: Number,
                    required: true,
                },
            },
        ],

        
}
)

const Wishlist = mongoose.model('Wishlist', wishlistSchema)

module.exports = Wishlist