import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/productCard/productCard";
import AddToCartButton from "../components/addToCartButton";
import DeleteButton from "../components/deleteButton";
function wishlist() {
  const userID = '65b22d061092dc4cb467558d'





  const [myWishlist, setMyWishlist] = useState([]);

useEffect(() =>{
const fetchWishlist = async() => {
const response = await axios.get(`http://localhost:4000/api/wishlist/${userID}`);
const product = response.data;
console.log(response)
console.log(product);
setMyWishlist(product)

}

fetchWishlist()
}, [])

const ListItems = myWishlist.items;
  return (
    <div className="max-w-[80vw] flex flex-col items-center  mx-[10vw]">
      <div className="m-6 px-2 rounded-sm font-semibold text-3xl bg-blue-300 text-blue-800 w-[80vw] ">Wish List</div>
      <div className="flex flex-wrap ">
        {myWishlist.items && myWishlist.items.map((itemlist) =><div key={itemlist._id} className="mx-2 my-4 mb-6 max-w-[25vw] shadow-lg rounded-lg">
          
          <ProductCard  
          productId={itemlist.productId}
          firstImage={itemlist.image}
          productName={itemlist.name}
          price={itemlist.price}
          brand={itemlist.brand}
          partNumber={itemlist.partNumber}
          />
          <div className="flex justify-between mx-2 ">
            <AddToCartButton 
            productId={itemlist.productId}
            userID={userID}
            /><DeleteButton
            userID={userID}
            productId={itemlist.productId}
            />
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default wishlist