import React from 'react'
import axios from 'axios'


function deleteButton({userID, productId}) {

  const remove = async () => {

    const response = await axios.delete(`http://localhost:4000/api/wishlist/${userID}`, {data: {productId}})
    const respond = response.data
    console.log(response.data)
  }

  return (
    <button type="button" onClick={remove} className="text-blue-700 hover:text-white border-2 hover:bg-red-700   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-40">Remove</button>
  )
}

export default deleteButton