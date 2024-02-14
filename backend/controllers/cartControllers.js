const Cart = require("../models/Cart");
const Item = require("../models/Product");

module.exports.getCartItems = async (req, res) => {
  const userId = req.params.id;

  try {
    let cart = await Cart.findOne({ userId });
    if (cart && cart.items.length > 0) {
      res.send(cart);
    } else {
      res.send(null);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went Wrong");
  }
};

module.exports.addCartItems = async (req, res) => {
  const userId = req.params.id;
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    let item = await Cart.findOne({ productId });

    if (!item) {
      res.json("Item not found");
    }

    const name = item.name;
    const price = item.price;

    if (cart) {
      let itemindex = cart.items.findIndex((p) => p.productId == productId);

      if (itemindex > -1) {
        let productitem = cart.items[itemindex];
        productitem.quantity += quantity;
        cart.items[itemindex] = productitem;
      } else {
        cart.items.push(productId, quantity, price);
      }
      cart.bill += quantity * price;
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      const newCart = await Cart.create({
        userId,
        items: [{ productId, name, quantity, price }],
        bill: quantity * price,
      });
      return res.send(newCart);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteCartItems = async (req, res) => {
  const userId = req.params.id;
  const itemId = req.params.productId;

  try {
    let cart = await Cart.findOne({ userId });
    let itemindex = cart.items.findIndex((p) => p.productId == productId);
    if (itemindex > -1) {
      let productitem = cart.items[itemindex];
      cart.bill = productitem.quantity * productitem.price;
      cart.items.splice(itemindex, 1);
    }

    cart = await cart.save();
    return res.send(cart);
  } catch (err) {
    console.log(err);
    res.json("something went wrong");
  }
};
