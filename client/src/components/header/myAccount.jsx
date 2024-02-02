import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function myAccount() {
  return (
    <div>
      <FontAwesomeIcon
        icon={faUser}
        style={{ color: "#1E40AF" }}
        className="fa-xl"
      />{" "}
      MY ACCOUNT
    </div>
  );
}

export default myAccount;
