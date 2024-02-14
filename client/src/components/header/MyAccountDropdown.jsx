import React from 'react'
import { Link } from 'react-router-dom'
function MyAccountDropdown() {
  return (
    <div className='block'>
      <ul>
        <li className='p-1'><Link>My Orders</Link></li>
        <li className='p-1'><Link to='/wishlist'>My WishList</Link></li>
        <li className='p-1'><Link>My Account</Link></li>
    </ul>

    </div>
  )
}

export default MyAccountDropdown