import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

const userID = "65b22d061092dc4cb467558d";

function cart() {
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/cart/${userID}`
      );
      const product = response.data;
      console.log(response);
      console.log(product);
      setMyCart(product);
    };

    fetchCart();
  }, []);

  const orderAPI = async() => {
    await axios.post(`http://localhost:4000/api/order/${userID}`, {myCart})
    .then((res) => {
      console.log(res)
      if(res.data.url){
        window.location.href = res.data.url

      }
    })
  }

  const cartItems = myCart.items;
  return (
    <>
      <div className="m-4">
        <div className="flex justify-between">
          <div className="text-3xl font-semibold">My Cart</div>
          <div className="text-xl">
            <button>
              Delete Cart <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>

        {myCart.items &&
          myCart.items.map((itemlist) => (
            <div key={itemlist._id}  className="flex my-6 border ">
              <div className="w-40 h-40  bg-slate-500 border-2">
                <img
                  className="object-contain w-full h-full"
                  src={itemlist.image}
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="m-6">{itemlist.name}</div>
                <div className="flex justify-between w-[80vw] m-6">
                  <div>{itemlist.brand}</div>
                  <div>{itemlist.partNumber}</div>
                  <div>{itemlist.quantity}</div>
                  <div>₹{itemlist.price}</div>
                  <div>Remove</div>
                </div>
              </div>
            </div>
          ))}
        <div className="flex justify-end items-center gap-x-4 my-6 p-4 bg-blue-300 rounded-sm">
          <div>Subtotal: ₹{myCart.bill}</div>
          <div className="border-2 border-blue-950 h-10"></div>
          <div>
            <button
              onClick={orderAPI}
              className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 "
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default cart;
