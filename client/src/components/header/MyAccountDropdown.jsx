import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../Context/UserContext";

function MyAccountDropdown() {
  const [userID, setUserID] = useState();

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

      const userResponse = response.data;
      setUserID(userResponse);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserId();
  }, []);

  console.log("state userID is ", userID);

  const myName = userID?.email.split("@")[0];

  const logout = async () => {
    localStorage.removeItem("token");
    console.log("token removed");
    window.location.reload();
  };
  return (
    <div className="block">
      <ul>
        <li className="p-1">
          <Link>Hi, {myName?.toUpperCase()}</Link>
        </li>
        <li className="p-1 hover:text-white hover:bg-blue-500">
          <Link to={`orders/${userID?._id}`}>My Orders</Link>
        </li>
        <li className="p-1  hover:text-white hover:bg-blue-500">
          <Link to={`wishlist/${userID?._id}`}>My WishList</Link>
        </li>
        <li className="p-1  hover:text-white hover:bg-blue-500">
          <Link to={`account/${userID?._id}`}>My Account</Link>
        </li>
        <button
          className="p-1  hover:text-white hover:bg-blue-500 w-full text-left"
          onClick={logout}
        >
          Logout
        </button>
      </ul>
    </div>
  );
}

export default MyAccountDropdown;
