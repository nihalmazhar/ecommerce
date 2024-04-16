import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../Context/CartContext";
import axios from "axios";
function Cart({userID}) {
  
  const { myCart } = useContext(CartContext);
  // const [navCart, setNavCart] = useState([]);
  console.log(myCart)
  
  if (!myCart || !myCart.items) return <div><FontAwesomeIcon
  icon={faCartShopping}
  style={{ color: "#1E40AF" }}
  className="fa-xl"
/></div>;

// const fetchCart = async () => {
//   try {
//    console.log('aaanaava', userID)
//    const response = await axios.get(
//      `http://localhost:4000/api/cart/${userID}`
//    );
//    const product = response.data;
//    setNavCart(product);
//    console.log("naavaa", navCart)
//    console.log('something cart')
//  }
//  catch(err){
//    console.log("fetchCart error for navbar", err)
//  }
//  };


  
//  useEffect(() => {
//   fetchCart()
// }, []);

  // console.log("naav", navCart)
  const cartLength = myCart?.items?.length ;

  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "#1E40AF" }}
        className="fa-xl"
      />

      <div className="-top-1 -right-3 w-6 h-4 rounded-lg bg-red-600 absolute flex justify-center items-center text-white text-sm">
        {" "}
        {cartLength}
      </div>
    </div>
  );
}

export default Cart;
