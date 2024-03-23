import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import UserContext from "../../Context/UserContext";
import CartContext from "../../Context/CartContext";
import SearchBar from "./searchBar";
import WishList from "./wishList";
import Cart from "./cart";
import MyAccount from "./myAccount";
import LoginSignup from "./LoginSignup";

function Navbar() {
  
  const {setUser} = useContext(UserContext);
  const [userID, setUserID] = useState();
  const {myCart} = useContext(CartContext);
  const {setMyCart} = useContext(CartContext)

  
  const fetchUserId = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not found in local storage");
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(
        "http://localhost:4000/api/user",
        config
      );

      const userResponse = response.data._id;
      setUserID(userResponse);
      setUser(userResponse)
    } 
    catch (err) {
      console.log(err);
    }
  };
  const fetchCart = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/cart/${userID}`
    );
    const product = response.data;
    setMyCart(product);
  };

  useEffect(() => {
    fetchUserId();
    
  }, []);

  return (
    
      <div className="flex">
        <nav className="bg-blue-100 flex items-center justify-between w-full">
          <Link to="/">
            <div className="bg-blue-800 w-60 h-20 text-white text-4xl font-extrabold flex items-center justify-center">
              PARTSBAY
            </div>
          </Link>
          <SearchBar />
          <div className="flex w-[25vw] justify-evenly items-center">
            <Link to={`/wishlist/${userID}`}>
              <WishList />
            </Link>
            <Link to={`/cart/${userID}`}>
              <Cart />
            </Link>
            <div>{userID ? <MyAccount /> : <LoginSignup />}</div>
          </div>
        </nav>
      </div>
    
  );
}

export default Navbar;
