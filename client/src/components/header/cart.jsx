import React, {useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../Context/CartContext";


function Cart() {


  const {myCart} = useContext(CartContext)
  
  if (!myCart || !myCart.items) return <div>Loading</div>
  const cartLength = myCart.items.length
  return (
     
    
      <div className="relative">
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "#1E40AF" }}
          className="fa-xl"
        />

        <div className="-top-1 -right-3 w-6 h-4 rounded-lg bg-red-600 absolute flex justify-center items-center text-white text-sm"> {cartLength}</div>
      </div>
    
  );
}

export default Cart;
