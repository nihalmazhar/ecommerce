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
    <div>
      <div>WishList</div>
      <div className="flex ">
        {myWishlist.items && myWishlist.items.map((itemlist) =><div className="mx-6 w-[25vw] shadow-lg rounded-lg">
          
          <ProductCard  
          firstImage={itemlist.image}
          productName={itemlist.name}
          price={itemlist.price}
          brand={itemlist.brand}
          partNumber={itemlist.partNumber}
          />
          <div className="flex justify-between mx-2 ">
            <AddToCartButton/><DeleteButton/>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default wishlist