const Cart = require('../models/Cart')
const Order = require('../models/Order')
const config = require('config')
const stripe = require('stripe')(config.get('StripeAPIKey'))
const User = require('../models/User')



module.exports.getOrder = async (req,res) => {
    let userId = req.params.id

    Order.findOne({userId}).sort({date : -1}).then(orders => res.json(orders))
}

module.exports.checkout = async (req,res) => {
   try { let userId = req.params.id;
    const {source} = req.body;

    const cart = await Cart.findOne({userId})
    const user = await User.findOne({id:userId})
    const email = user.email

    if (cart){
            const charge = await stripe.charges.create(
                {
                    amount : cart.bill,
                    currency: 'inr',
                    source: source,
                    receipt_email : email,
                }
            )
            if(!charge){res.send('payment failed')}
            if(charge){
                const order = await user.create({
                    userId: userId,
                    items: cart.items,
                    bill : cart.bill
                });

                const deletedcart = await user.findByIdAndDelete({id:cart.id})
                return res.send(order)
            }
    }
    else{
        res.send('you dont have any items in your cart')
    }}

    catch(err){
        console.log(err)
        res.send('something went wrong')
    }
}