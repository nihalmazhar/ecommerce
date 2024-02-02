import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <form action="submit" method="POST">
      <input
        type="text"
        className=" border-2 border-gray-700 rounded bg-white h-10 w-96"
      />
      <button
        type="submit"
        className="border-2 border-gray-700 rounded bg-white h-10 w-12"
      >
        {" "}
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#1E40AF" }}
        />
      </button>
    </form>
  );
}

export default SearchBar;
