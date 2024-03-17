import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function WishList({WishlistArrayLengthe}) {
  return (
    
      <div className="relative">
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: "#1E40AF" }}
          className="fa-xl"
        />
          <div className="-top-1 -right-3 w-6 h-4 rounded-lg bg-red-600 absolute flex justify-center items-center text-white text-sm">{WishlistArrayLength}</div>
      </div>
    
  );
}

export default WishList;
