const Cart = require("../models/Cart");
const Order = require("../models/Order");
const config = require("config");
const stripe = require("stripe")(config.get("StripeAPIKey"));
const User = require("../models/User");

module.exports.getOrder = async (req, res) => {
  let userId = req.params.id;

  Order.findOne({ userId })
    .sort({ date: -1 })
    .then((orders) => res.json(orders));
};

module.exports.checkout = async (req, res) => {
  let userId = req.params.id;

  const cart = await Cart.findOne({ userId });
  const user = await User.findOne({ _id: userId });
  const cartId = cart._id.toHexString();
  console.log(cartId)
  const cartline_items = cart.items.map((item) => {
    return {
      price_data: {
        currency: "INR", 
        unit_amount: item.price * 100,
        product_data: {
          name: item.name, 
          
        },
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items: cartline_items,
    phone_number_collection: {
      enabled: true,
    },
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },

    allow_promotion_codes: true,
    
    metadata :{
      userId: userId,
      cartId: cartId
    },

    mode: "payment",
    success_url: `http://localhost:5173/success`,
    cancel_url: `http://localhost:5173/cart/${userId}`,
  });
  
  res.send({ url: session.url });
};




// {
//     try { let userId = req.params.id;
//      const {source} = req.body;

//      const cart = await Cart.findOne({userId})
//      const user = await User.findOne({id:userId})
//      const email = user.email

//      if (cart){
//              const charge = await stripe.charges.create(
//                  {
//                      amount : cart.bill,
//                      currency: 'inr',
//                      source: source,
//                      receipt_email : email,
//                  }
//              )
//              if(!charge){res.send('payment failed')}
//              if(charge){
//                  const order = await user.create({
//                      userId: userId,
//                      items: cart.items,
//                      bill : cart.bill
//                  });

//                  const deletedcart = await user.findByIdAndDelete({id:cart.id})
//                  return res.send(order)
//              }
//      }
//      else{
//          res.send('you dont have any items in your cart')
//      }}

//      catch(err){
//          console.log(err)
//          res.send('something went wrong')
//      }
//  }
