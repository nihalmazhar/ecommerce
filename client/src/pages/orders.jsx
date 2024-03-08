import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Orders() {

    const {userID} = useParams();
  const [orders, setOrders] = useState([]);


  const fetchOrders = async() => {
   const response = await axios.get(`http://localhost:4000/api/orders/${userID}`);
   const myorders = response.data;
   console.log(myorders)
   setOrders(myorders)


  }
  console.log(orders)
  useEffect(() => {fetchOrders()}, [userID])

  return (
    <div>
        <h1 className='font-semibold m-4 text-2xl'>My Orders</h1>
        {orders && orders.map((items) => 
           ( <div className='border-4 border-blue-900 mb-4 p-4 m-4 rounded-md'  key={items._id}>
            <div className='flex justify-between'><div className=' text-gray-600'>Order ID: #{items._id}</div> <div>Order Date: {items.date_added.substr(0,10)}</div>    </div>
            <div className=' flex justify-around bg-gray-200'><div className='w-20'>Sl.No</div><div className='w-20'>Name</div> <div className='w-20'>Quantity</div> <div className='w-20'>Price</div> </div>
            {
                items.items && items.items.map((itemlist, index) => (
                    <div key={itemlist._id} className='flex justify-around border-b-2'><div className='min-w-20'>{index + 1}</div><div className='min-w-20'>{itemlist.name}</div>  <div className='min-w-20 text-center'>{itemlist.quantity}</div> <div className='min-w-20'>₹{itemlist.price}</div></div>
                ))
            }
            <div className='flex flex-col items-end my-4 border-y-2'>
                <div className='underline'>SubTotal:₹{items.subtotal}</div>
                <div className='underline'>Discount:₹{items.discount}</div>
                <div className='underline'>Final Total:₹{items.bill}</div>
            </div>

            <div className='flex justify-between'>
                <div>
                    <h3 className='font-semibold'>Contact Details</h3>
                    <div>Name: {items.name}</div>
                    <div>E-mail: {items.email}</div>
                    <div>Phone: {items.phoneNumber}</div>
                </div>
                <div>
                    <h3 className='font-semibold'>Shipping Address</h3>
                    <div>{items.address.line1}</div>
                    <div>{items.address.line2}</div>
                    <div>{items.address.city}</div>
                    <div>{items.address.state}</div>
                    <div>{items.address.country}</div>
                    <div>{items.address.postal_code}</div>
                </div>
            </div>
            </div>)
        )}

    </div>
  )
}

export default Orders