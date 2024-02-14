import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function WishList() {
  return (
    
      <div>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: "#1E40AF" }}
          className="fa-xl"
        />
      </div>
    
  );
}

export default WishList;
