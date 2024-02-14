import React from "react";

import { useState } from "react";

import MyAccountDropdown from "./MyAccountDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function MyAccount() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <>
      <div
        className="menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: "#1E40AF" }}
          className="fa-xl"
        />{" "}
        MY ACCOUNT
        <div className="absolute z-10 bg-blue-100 w-32 border-2 rounded ">{isDropdownVisible && <MyAccountDropdown />}</div>
      </div>
    </>
  );
}

export default MyAccount;
