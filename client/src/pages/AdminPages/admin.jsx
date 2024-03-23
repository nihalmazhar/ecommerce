import React from 'react'
import { NavLink } from 'react-router-dom'
function admin() {
  return (<>
    <div className='flex justify-center m-4 bg-green-900'><h1 className='font-extrabold text-3xl text-white shadow-md' >Admin Panel</h1></div>
    <div className='m-4 p-2 bg-green-500 flex items-center justify-between'>
        
            <NavLink  className= { ({isActive}) =>  `p-2 rounded-sm ${isActive ? "bg-white text-black" : "bg-green-400 text-white" } `} to='/admin/addproduct' >Add Product </NavLink>
        
        
            <NavLink  className= { ({isActive}) =>  `p-2 rounded-sm ${isActive ? "bg-white text-black" : "bg-green-400 text-white" } `} to='/admin/editproduct' >View, edit and Delete Products </NavLink>
        
       
            <NavLink className= { ({isActive}) =>  `p-2 rounded-sm ${isActive ? "bg-white text-black" : "bg-green-400 text-white" } `} to='/admin/banners' >Set Ad Banners </NavLink>
        
        
            <NavLink className= { ({isActive}) =>  `p-2 rounded-sm ${isActive ? "bg-white text-black" : "bg-green-400 text-white" } `} to='/admin/customer-support' > Customer Support </NavLink>
        
    </div>

    </>
  )
}

export default admin