const Wishlist = require("../models/wishlist");
const Item = require("../models/Product");

module.exports.getListItems = async (req, res) => {
  const userId = req.params.id;

  try {
    const wishlist = await Wishlist.findOne({ userId });
    if (wishlist && wishlist.items.length > 0) {
      res.send(wishlist);
    } else {
      res.send("Nothing Found");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.addListItems = async (req, res) => {
  const userId = req.params.id;
  const productId = req.body.productId;
  try {
    let wishlist = await Wishlist.findOne({ userId });
    let item = await Item.findOne({ _id: productId });

    if (!item) {
      res.send("item not found");
    }

    let price = item.price;
    let name = item.name;
    const brand = item.brand;
    const partNumber = item.partNumber;
    const image = item.images[0];
    if (wishlist) {
      itemIndex = wishlist.items.findIndex((p) => p.productId == productId);

      if (itemIndex > -1) {
        let productItem = wishlist.items[itemIndex];
        wishlist.items[itemIndex] = productItem;
      } else {
        wishlist.items.push({
          productId,
          name,
          price,
          brand,
          partNumber,
          image,
        });
      }

      wishlist = await wishlist.save();
      return res.send(wishlist);
    } else {
      const newwishlist = await Wishlist.create({
        userId,
        items: [{ productId, name, price }],
      });
      return res.send(newwishlist);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteListItems = async (req, res) => {
  const userId = req.params.id;
  const productId = req.body.productId;
  try {
    let wishlist = await Wishlist.findOne({ userId });
    let itemindex = wishlist.items.findIndex((p) => p.productId == productId);

    if (itemindex > -1) {
      let productitem = wishlist.items[itemindex];
      wishlist.items.splice(itemindex, 1);
    }

    wishlist = await wishlist.save();
    return res.send(wishlist);
  } catch (err) {
    console.log(err);
    res.json("something went wrong");
  }
};
