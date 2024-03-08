import React from "react";
import { Link } from "react-router-dom";


function productCard({firstImage,productName,price,brand,partNumber, productId}) {
  return (
    <>
    <div className="max-w-[25vw] p-4 m-2 ">
      <Link to={`/product-details/${productId}`}>
        <div className="bg-gray-300">
          <img src={firstImage}/>
        </div>
      </Link>
      <div className="text-lg font-medium">
        {productName}
      </div>
      <div className="font-semibold text-xl text-blue-900">
      ₹{price}
      </div>
      <div className="flex justify-between">
        <div className=" text-gray-600 text-opacity-60">{brand}</div>
        <div className=" text-gray-600 text-opacity-60" >{partNumber}</div>
      </div>
      
    </div>
    </>
  )
}

export default productCard;
