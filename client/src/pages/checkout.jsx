import React from "react";



function checkout() {
  return (
    <div className="flex">
      <div className="m-6">
       <h2 className="text-lg font-bold">Shipping address</h2>
       <form action="submit" method="POST">
          <div className="my-6" >
            <label for='name' className="block text-sm ">Full Name*</label>
            <input className="rounded" type="text"  id='name' placeholder="Enter your name"required/>
          </div>
          <div className="my-6">
            <label for='phone' className="block text-sm">Phone number*</label>
            <input className="rounded" type="number"  id='phone' placeholder="Enter your phone number"required/>
          </div>
          <div className="my-6">
            <label for='address' className="block text-sm">Address*</label>
            <input className="rounded" type="text"  id='phone' placeholder="Enter your Address"required/>
          </div>
          <div className="my-6">
            <label for='pincode' className="block text-sm">Pin Code*</label>
            <input className="rounded" type="number"  id='pincode' placeholder="Enter your pin code"required/>
          </div>
       </form>
      </div>
      <div className=" m-6 ml-[30vw]  ">
        <h2 className="text-lg font-bold ">Order details</h2>
        <div className="flex-col justify-evenly h-[80vh] border rounded my-6">
          <div className="flex justify-between w-[40vw] border rounded px-2">
            <div className="flex flex-grow-2 " >Product Name</div><div>Qauntity</div><div>Price</div>
          </div>
        </div>
        <div className="bg-blue-400 px-2">SubTotal:</div>
        <div>
        <div><button type="button" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-60 m-6 ">Proceed to payment</button></div>

      </div>
      </div>
      
    </div>
  )
}

export default checkout