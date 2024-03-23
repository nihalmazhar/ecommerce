import React from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

function addToCartButton({productId, userID}) {

  
    const addToCart = async () => {
      try {
        
        const response = await axios.post(
          `http://localhost:4000/api/cart/${userID}`,
          { productId, quantity: 1 }
        );
        console.log(response.data);
        toast.info("Added to cart Successfully");
      } catch (err) {
        console.log(err);
        toast.error("Failed to add product to cart");
      }
    };
  
  return (
    <button type="button" onClick={addToCart} className="text-white border-2 border-blue-700 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5  w-full ">Add to Cart</button>
  )
}

export default addToCartButton