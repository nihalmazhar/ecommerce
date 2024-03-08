import React, { useEffect, useState } from "react";
import SearchBar from "./searchBar";
import WishList from "./wishList";
import Cart from "./cart";
import MyAccount from "./myAccount";
import { Link } from "react-router-dom";
import axios from "axios";
function Navbar() {

  const [userID, setUserID] = useState()

  const userid = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Handle case where token is not present
      console.error("Token not found in local storage");
      return;
    }

    // Set the Authorization header with the bearer token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try
    {const userresponse = await axios.get(
      "http://localhost:4000/api/user",
      config
    );
    
    const userr = userresponse.data._id;
    setUserID(userr)}
    
    catch(err) {console.log(err)}
  };

  userid();

  return (
    <div className="flex">
      <nav className="bg-blue-100 flex items-center justify-between w-full">
        <Link to='/'>
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
          <MyAccount />
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
