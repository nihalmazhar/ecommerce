import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"
function Cart() {
  return (
    
      <div>
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "#1E40AF" }}
          className="fa-xl"
        />
      </div>
    
  );
}

export default Cart;
