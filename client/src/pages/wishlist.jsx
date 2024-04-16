import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/productCard/productCard";
import AddToCartButton from "../components/addToCartButton";
import DeleteButton from "../components/deleteButton";
import { ToastContainer } from "react-toastify";
import UserContext from "../Context/UserContext";

function wishlist() {
  const { user } = useContext(UserContext);
  const userID = user;

  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <div className="h-80 flex justify-center items-center text-xl" > Log in to view your Wish List <Link to={'/login'} ><button className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 m-2 rounded-md ">Log In</button></Link></div>
    )
  }

  if (!user) return <div>Loading</div>;

  const [myWishlist, setMyWishlist] = useState([]);

  const fetchWishlist = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/wishlist/${userID}`
    );
    const product = response.data;

    setMyWishlist(product);
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleWishlistChange = () => {
    fetchWishlist(); // Refresh wishlist
  };

  console.log(myWishlist);
  if (myWishlist == "Nothing Found") {
    return (
      <div className="h-80 flex justify-center items-center text-red-800 text-3xl font-semibold">
        {" "}
        Your Wish list is Empty{" "}
      </div>
    );
  } else {
    return (
      <div className="max-w-[80vw] flex flex-col items-center  mx-[10vw]">
        <ToastContainer position="bottom-center" autoClose={2500} />
        <div className="m-6 px-2 rounded-sm font-semibold text-3xl bg-blue-300 text-blue-800 w-[80vw] ">
          Wish List
        </div>
        <div className="flex flex-wrap w-[80vw]">
          {myWishlist.items &&
            myWishlist.items.map((itemlist) => (
              <div
                key={itemlist._id}
                className="mx-2 my-4 mb-6 max-w-[25vw] shadow-lg rounded-lg"
              >
                <ProductCard
                  productId={itemlist.productId}
                  firstImage={itemlist.image}
                  productName={itemlist.name}
                  price={itemlist.price}
                  brand={itemlist.brand}
                  partNumber={itemlist.partNumber}
                />
                <div className="flex justify-between mx-2 ">
                  <div className="w-40 mb-2">
                    <AddToCartButton
                      productId={itemlist.productId}
                      userID={userID}
                    />
                  </div>
                  <div className="w-40 mb-2">
                    <DeleteButton
                      userID={userID}
                      productId={itemlist.productId}
                      onWishlistChange={handleWishlistChange}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default wishlist;
