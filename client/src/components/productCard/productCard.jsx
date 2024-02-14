import React from "react";



function productCard() {
  return (
    <>
    <div className="w-[25vw] p-4 m-2 ">
      <div className="">
        <img src="/src/assets/productImages/timing belt.png"/>
      </div>
      <div>
        Timing belt
      </div>
      <div>
      ₹100
      </div>
      <div className="flex justify-between">
        <div>Bosch</div>
        <div>PL3-TBR</div>
      </div>
      
    </div>
    </>
  )
}

export default productCard;
