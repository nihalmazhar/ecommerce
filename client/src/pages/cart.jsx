import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faSquareMinus } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import Counter from "../components/Counter";
const userID = "65b22d061092dc4cb467558d";

function cart() {
  const [myCart, setMyCart] = useState([]);

  const fetchCart = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/cart/${userID}`
    );
    const product = response.data;
    setMyCart(product);
  };

  useEffect(() => {
    fetchCart();
  }, [Counter]);

  const orderAPI = async () => {
    await axios
      .post(`http://localhost:4000/api/orders/${userID}`, { myCart })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      });
  };

  const deleteCartItem = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/cart/${userID}`,
        { data: { productId } }
      );

      fetchCart();
    } catch (err) {console.log(err)}
  };

  const deleteCart = async (req,res) => {
    const action = await axios.delete(`http://localhost:4000/api/cart/delete/${userID}`);
    console.log(action.data)
    fetchCart();
    
  }


  if (myCart == "nothing found") {
    return (
      <div className="h-80 flex justify-center items-center text-red-800 text-3xl font-semibold">
        {" "}
        Your Cart is Empty{" "}
      </div>
    );
  } else {
    return (
      <>
        <div className="m-4">
          <div className="flex justify-between">
            <div className="text-3xl font-semibold">My Cart</div>
            <div className="text-xl">
              <button onClick={deleteCart} className="border-2 border-red-600 rounded-md p-1 hover:bg-red-600 hover:text-gray-100">
                Delete Cart <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </div>

          {myCart.items &&
            myCart.items.map((itemlist) => (
              
                <div key={itemlist._id} className="flex my-6 border ">
                    <Link to={`/product-details/${itemlist.productId}`}>
                    <div className="w-40 h-40  bg-slate-500 border-2">
                      <img
                        className="object-contain w-full h-full"
                        src={itemlist.image}
                      />
                    </div>
                    </Link>
                    <div className="flex flex-col justify-between">
                      <div className="m-6 min-w-20">{itemlist.name}</div>
                      <div className="flex justify-between w-[80vw] m-6">
                        <div className="min-w-20">{itemlist.brand}</div>
                        <div className="min-w-20">{itemlist.partNumber}</div>
                        <div className="min-w-20">
                          <Counter userID={userID}
                          itemQuantity={itemlist.quantity}
                          productId={itemlist.productId} />
                        </div>
                        <div className="min-w-20">₹{itemlist.price}</div>
                        <div className="min-w-20">
                          <button onClick={() => deleteCartItem(itemlist._id)} className="hover:text-red-600">
                             <FontAwesomeIcon icon={faSquareMinus } size="xl" /> Remove
                          </button>
                        </div>
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
}

export default cart;
