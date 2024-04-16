const Cart = require("../models/Cart");
const Order = require("../models/Order");
const config = require("config");
const stripe = require("stripe")(config.get("StripeAPIKey"));
const User = require("../models/User");

module.exports.getAllOrder = async (req, res) => {
  Order.find()
  .sort({ date: -1 })
  .then((orders) => res.json(orders));
};

module.exports.getOrder = async (req, res) => {
  let userId = req.params.id;
  Order.find({ userId })
    .sort({ date: -1 })
    .then((orders) => res.json(orders));
};

module.exports.checkout = async (req, res) => {
  let userId = req.params.id;
  const cart = await Cart.findOne({ userId });
  const user = await User.findOne({ _id: userId });
  const cartId = cart._id.toHexString();

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
    metadata: {
      userId: userId,
      cartId: cartId,
    },

    mode: "payment",
    success_url: `http://localhost:5173/success`,
    cancel_url: `http://localhost:5173/cart/${userId}`,
  });

  res.send({ url: session.url });
};

