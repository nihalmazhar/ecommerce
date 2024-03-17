import React from 'react'
import { Link } from 'react-router-dom'
function MyAccountDropdown({myName}) {

  const userID = '65b22d061092dc4cb467558d'

  const logout = async() => {
    
     localStorage.removeItem('token')
    console.log('token removed')
  }
  return (
    <div className='block'>
      <ul>
        <li className='p-1'><Link>{myName}</Link></li>
        <li className='p-1'><Link to={`orders/${userID}`}>My Orders</Link></li>
        <li className='p-1'><Link to={`wishlist/${userID}`}>My WishList</Link></li>
        <li className='p-1'><Link to={`account/${userID}`}>My Account</Link></li>
        <button className='p-1' onClick={logout}>Logout</button>
    </ul>

    </div>
  )
}

export default MyAccountDropdown