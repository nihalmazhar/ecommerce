import React from 'react'
import { Link } from 'react-router-dom'
function admin() {
  return (<>
    <div className='flex justify-center m-8'><h1 className='font-extrabold text-3xl' >Admin Panel</h1></div>
    <div className='m-4'>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
            <Link to='/addproduct' >Add Product </Link>
        </button>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
            <Link to='/editproduct' >View, edit and Delete Products </Link>
        </button>
    </div>
    </>
  )
}

export default admin