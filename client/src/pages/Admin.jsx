import React from 'react'

function Admin() {
  return (
    <>
    <form action='http://localhost:4000/api/items' method='POST'>
        <input type='text' name='name' id='name' placeholder='Enter Product Name'/>
        <input type='number' name='price' id='price' placeholder='Enter Product Price'/>
        <input type='text' name='category' id='category' placeholder='Enter Product category'/>
        <input type='text' name='description' id='description' placeholder='Enter Product Description'/>
        <input type='text' name='seller' id='seller' placeholder='Enter Product Seller'/>
        <input type='text' name='brand' id='brand' placeholder='Enter Product Brand'/>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Admin