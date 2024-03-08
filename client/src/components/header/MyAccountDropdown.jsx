import React from 'react'
import { Link } from 'react-router-dom'
function MyAccountDropdown({myName}) {

  const userID = '65b22d061092dc4cb467558d'
  return (
    <div className='block'>
      <ul>
        <li className='p-1'><Link>{myName}</Link></li>
        <li className='p-1'><Link to={`orders/${userID}`}>My Orders</Link></li>
        <li className='p-1'><Link to={`wishlist/${userID}`}>My WishList</Link></li>
        <li className='p-1'><Link to={`account/${userID}`}>My Account</Link></li>
    </ul>

    </div>
  )
}

export default MyAccountDropdown