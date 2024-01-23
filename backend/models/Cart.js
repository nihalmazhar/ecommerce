const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true
        },

        items: [
            {
                productId: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true,
                },

                quantity: {
                    type: Number,
                    required: true,
                    min: [1, 'Qauntity cannot be less than 1'],
                    default: 1,
                },

                price: {
                    type: Number,
                    required: true,
                }
            }
        ],

        bill:{
            type:Number,
            required:true,
            default:true,
        },
}
)

const Cart = mongoose.model('cart', cartSchema)

export default Cart