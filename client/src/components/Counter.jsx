import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import CartContext from "../Context/CartContext";

function Counter({ userID, productId, itemQuantity}) {

  const {myCart, setMyCart } = useContext(CartContext);
  const [counter, setCounter] = useState(itemQuantity);

  // const fetchQuantity = async() => {
  //   const response = await axios.get(`http://localhost:4000/api/cart/${userID}`)
  //   console.log("quantity is", response.data)
  //   const productId = response.data.{productId}
  //   setCounter()
  // }
  // const initialQuantity = () => {
  //   setCounter(itemQuantity)
  // }
  // useEffect(()=> initialQuantity() , []);



  const counterPlus = () => {
    const currentCounter = counter + 1;
    setCounter(currentCounter);
    updateQuantity(currentCounter);
    
    
  };

  const counterMinus = () => {
    if (counter > 1) {
      const currentCounter = counter - 1;
      setCounter(currentCounter);
      updateQuantity(currentCounter);
      
    }
  };

  const updateQuantity = async (newQuantity) => {
    const response = await axios.patch(
      `http://localhost:4000/api/cart/${userID}`,
      {
        productId: productId,
        quantity: newQuantity,
      }
    );
    setMyCart(response.data);
    console.log("Quantity updated:", response.data);
  };

  return (
    <div>
      <div className="w-24 border-2  border-blue-900 rounded-3xl flex justify-between items-center">
        <button
          onClick={counterPlus}
          className="text-blue-800 hover:text-[#1e3050]"
        >
          <FontAwesomeIcon icon={faCirclePlus} size="2xl" />
        </button>
        {counter}
        <button
          onClick={counterMinus}
          className="text-blue-800 hover:text-[#1e3050]"
        >
          <FontAwesomeIcon icon={faCircleMinus} size="2xl" />
        </button>
      </div>
    </div>
  );
}

export default Counter;
