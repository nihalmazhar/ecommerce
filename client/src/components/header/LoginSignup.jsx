import React from "react";
import { Link } from "react-router-dom";

function LoginSignup() {
  return (
    <Link to="/login">
      <div className="text-blue-700 hover:text-blue-900 font-semibold p-2 px-6 bg-blue-200 rounded-md">
        LogIn
      </div>
    </Link>
  );
}

export default LoginSignup;
