import React, { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CartContext from "../Context/CartContext";

function addToCartButton({ productId, userID }) {

  const {myCart, setMyCart} = useContext(CartContext)

  const addToCart = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/cart/${userID}`,
        { productId, quantity: 1 }
      );
      const product = response.data;
      setMyCart(product);
      toast.info("Added to cart Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add product to cart");
    }
  };

  return (
    <button
      type="button"
      onClick={addToCart}
      className="text-white border-2 border-blue-700 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5  w-full "
    >
      Add to Cart
    </button>
  );
}

export default addToCartButton;
