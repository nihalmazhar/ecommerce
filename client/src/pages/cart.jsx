import React from "react";



function cart() {
  return (<>
    <div className="m-4">
      <div className="flex justify-between">
        <div>My Cart</div>
        <div>Delete Cart</div>
      </div>
      <div className="flex my-6">
        <div className="w-40 h-40  bg-slate-500 border-2"><img className="object-contain w-full h-full" src="/src/assets/productImages/timing belt.png"/></div>
        <div className="flex flex-col justify-between">
          <div className="m-6">Product Name</div>
          <div className="flex justify-between w-[80vw] m-6">
            <div>Brand</div><div>Part Number</div><div>Add number of products</div><div>Amount</div><div>remove</div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-x-4 m-6">
        <div>
          Subtotal:Price
        </div>
        <div>
          Proceed to Checkout
        </div>
      </div>
    </div>
    </>
  )
}

export default cart