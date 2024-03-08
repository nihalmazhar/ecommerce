const Cart = require("../models/Cart");
const Order = require("../models/Order");
const config = require("config");
const stripe = require("stripe")(config.get("StripeAPIKey"));
const User = require("../models/User");
const { checkout } = require("./orderControllers");

const endpointSecret =
  "whsec_fb1bb069643a75a6928e9ecbb84882906b50974adedbbb1abfb5aadaa5d6c7eb";

module.exports.webhook = async (request, response) => {
  const sig = request.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    console.log("done");
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const checkoutData = event.data.object;
      console.log(
        "data is",
        checkoutData.metadata.cartId,
        checkoutData.metadata.userId
      );

      const cart = await Cart.findOne({ userId: checkoutData.metadata.userId });
      const user = await User.findOne({ _id: checkoutData.metadata.userId });

      const order = await Order.create({
        userId: checkoutData.metadata.userId,
        name: checkoutData.customer_details.name,
        email: checkoutData.customer_details.email,
        phoneNumber: checkoutData.customer_details.phone,
        items: cart.items,
        bill: checkoutData.amount_total / 100,
        subtotal: checkoutData.amount_subtotal / 100,
        discount: checkoutData.total_details.amount_discount / 100,
        address: {
          city: checkoutData.shipping_details.address.city,
          country: checkoutData.shipping_details.address.country,
          line1: checkoutData.shipping_details.address.line1,
          line2: checkoutData.shipping_details.address.line2,
          postal_code: checkoutData.shipping_details.address.postal_code,
          state: checkoutData.shipping_details.address.state,
        },
      });

      const deletedcart = await Cart.findByIdAndDelete({
        _id: checkoutData.metadata.cartId,
      });
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
};
