import React, { useState } from "react";

import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [myCart, setMyCart] = useState([]);

  return (
    <CartContext.Provider value={{ myCart, setMyCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
