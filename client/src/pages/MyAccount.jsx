import React, { useState, useEffect } from "react";
import {Link, useParams } from "react-router-dom";
import axios from "axios";

function MyAccount() {
  const [userID, setUserID] = useState();

  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <div className="h-80 flex justify-center items-center text-xl" > Log in to view your Account Details <Link to={'/login'} ><button className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 m-2 rounded-md ">Log In</button></Link></div>
    )
  }

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

  console.log(userID);

  return (
    <div>
      <h1 className="font-semibold text-3xl">Your Account Details</h1>

      {userID && (
        <div className="flex flex-col gap-4 max-w-88">
          <div className="flex items-center gap-4">
            <div className="min-w-32">Your userID is:</div>{" "}
            <input
              type="text"
              value={userID._id}
              disabled
              className="rounded-md"
            />{" "}
          </div>
          <div className="flex items-center gap-4">
            <div className="min-w-32">Your Email is:</div>{" "}
            <input
              type="text"
              value={userID.email}
              disabled
              className="rounded-md"
            />
          </div>
          <div className="flex items-center gap-4">
            {" "}
            <div className="min-w-32">Your username :</div>{" "}
            <input
              type="text"
              value={userID.email.split("@")[0]}
              disabled
              className="rounded-md"
            />{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyAccount;
