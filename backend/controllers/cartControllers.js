const Cart = require("../models/Cart");
const Item = require("../models/Product");

module.exports.getCartItems = async (req, res) => {
  const userId = req.params.id;

  try {
    let cart = await Cart.findOne({ userId });
    // if (!cart) {res.send('nothing is found')};
    if (cart && cart.items.length > 0) {
      res.send(cart);
    } else {
      res.send('nothing found');
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
    let item = await Item.findOne({ _id:productId });

    if (!item) {
      res.json("Item not found");
    }

    const name = item.name;
    const price = item.price;
    const brand = item.brand;
    const partNumber = item.partNumber;
    const image = item.images[0];
    if (cart) {
      let itemindex = cart.items.findIndex((p) => p.productId == productId);

      if (itemindex > -1) {
        let productitem = cart.items[itemindex];
        productitem.quantity += quantity;
        cart.items[itemindex] = productitem;
      } else {
        try{
          console.log(productId,quantity,price);
          cart.items.push({productId:productId, name , quantity:quantity, price:price, brand, partNumber, image});}
        catch (err){console.log(err , "failure")}
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


module.exports.editCartItems = async (req, res) => {
  const userId = req.params.id;
  const productId = req.body.productId;
  const quantity = req.body.quantity;

  console.log(userId, productId, quantity)

  try {
    let cart = await Cart.findOne({userId});
    
    if (cart) {
      let itemindex = cart.items.findIndex((p) => p.productId == productId);
      if (itemindex > -1) {
        let productitem = cart.items[itemindex];
        productitem.quantity = quantity;
        cart.items[itemindex] = productitem;

        let newBill = 0;
            cart.items.forEach((item) => {
                newBill += item.quantity * item.price;
              });
              cart.bill = newBill;
      cart = await cart.save();
      return res.status(201).send(cart);
  }
     
}

  }

  catch(err){console.log(err)}
}
module.exports.deleteCartItems = async (req, res) => {
  const userId = req.params.id;
  const productId = req.body.productId;

  console.log(userId, productId)
  try {
    let cart = await Cart.findOne({ userId });
    console.log(cart)
    let itemindex = cart.items.findIndex((p) => p._id == productId);
    console.log(itemindex)
    if (itemindex > -1) {
      let productitem = cart.items[itemindex];
      console.log(productitem)
      cart.bill -= productitem.quantity * productitem.price;
      cart.items.splice(itemindex, 1);
    }

    else {console.log('This went wrong')}

    cart = await cart.save();
    return res.send(cart);
  } catch (err) {
    console.log(err);
    res.json("something went wrong");
  }
};

module.exports.deleteEntireCart = async (req,res) => {

  const userID = req.params.id

  const deletedCart = await Cart.findOneAndDelete({userId:userID})
  res.send("nothing found")
}
