import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function HamMenu() {
  return (
    <div>
      <FontAwesomeIcon
        icon={faBars}
        style={{ color: "#1E40AF" }}
        className="fa-xl"
      />
    </div>
  );
}

export default HamMenu;
