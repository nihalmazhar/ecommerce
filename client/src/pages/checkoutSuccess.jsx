import React from 'react'
import  {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';
function checkoutSuccess() {
  const userID = "65b22d061092dc4cb467558d";
  return (<>
    <div className='h-[60vh] flex flex-col justify-center items-center '><div className='text-xl gap-8 w-80 flex justify-center items-center mb-4'><p className='inline tracking-widest'>Payment is Successful</p>     <FontAwesomeIcon icon={faCircleCheck} size="2xl" style={{color: "#1c71d8",}} /></div>
    <Link to={`/orders/${userID}`}>
      <div ><button className='bg-blue-700 p-4 rounded-lg text-white text-center '>Click here to view Orders</button></div>
    </Link>
    </div>
  </>)
}

export default checkoutSuccess