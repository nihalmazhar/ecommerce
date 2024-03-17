import React, { useState } from 'react'

function Delivery() {

    const [pincode, setPinCode] = useState();

    const [status, setStatus] = useState('');

    const handlePinCodeChange = (e) =>{
    setPinCode(e.target.value)}

    const checkDelivery = () => {
        if (pincode >= 600000 && pincode <= 700000){
            setStatus('Delivery available with 3-5 Days')
        }
        else{
            setStatus('Delivery not Available')
        }
    }
    console.log(pincode)
  return (
    <div>
        <div className='bg-slate-100 w-min flex items-center rounded-md p-1 m-1 mb-2 gap-1'><span>Delivery:</span><input type='number' placeholder='Enter Pincode' onChange={handlePinCodeChange}/><button className='bg-slate-300 p-1 rounded-md' onClick={checkDelivery}>Check</button></div>
        {status && <div className='text-blue-700 mb-3'>***{status}</div>}
    </div>
  )
}

export default Delivery