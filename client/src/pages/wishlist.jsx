import React from "react";

import ProductCard from "../components/productCard/productCard";
import AddToCartButton from "../components/addToCartButton";
import DeleteButton from "../components/deleteButton";
function wishlist() {
  return (
    <div>
      <div>WishList</div>
      <div>
        <div className="mx-6 w-[25vw] border-gray-600 border rounded-lg">
          
          <ProductCard/>
          <div className="flex mx-2 ">
            <AddToCartButton/><DeleteButton/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default wishlist