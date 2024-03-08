import React from 'react'
import axios from 'axios'


function addToCartButton({productId, userID}) {

  const addToCart = async() => {
    const response = await axios.post(`http://localhost:4000/api/cart/${userID}`, { productId, quantity: 1 })
    const recieved = response.data
  }
  return (
    <button type="button" onClick={addToCart} className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  w-40">Add to Cart</button>
  )
}

export default addToCartButton