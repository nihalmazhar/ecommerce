import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import Fuse from "fuse.js";

function SearchBar() {
  const [input, setInput] = useState("");
  const [filteredResultset, setFilteredResultset] = useState([]);
  
  const searchContainerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setInput("");
        setFilteredResultset([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const updateInput = (e) => {
    const inputData = e.target.value.toLowerCase();
    setInput(inputData);
  };

  const fetchResults = async (input) => {
    console.log(input);
    const response = await axios.get(`http://localhost:4000/api/items`);
    const responses = response.data;
    const options = {
      includeScore: true,
      includeMatches: true,
      threshold: 0.3,
      keys: ["name", "description", "brand"],
    };
    const fuse = new Fuse(responses, options);
    const fusefiltered = fuse.search(input);

    const filteredFuseResults = fusefiltered.map((result) => result.item);

    // const filteredResults = responses.filter((item) => {
    //   return input && item && item.name && item.name.toLowerCase().includes(input)
    // })
    setFilteredResultset(filteredFuseResults);
  };
  const handleChange = (e) => {
    updateInput(e);
    fetchResults(input);
  };

  const handleLinkClick = () => {
    setInput("");
    setFilteredResultset([]);
  };

  return (
    <>
      <div
        ref={searchContainerRef}
        className="bg-white border-2 border-blue-700 rounded-md  "
      >
        <input
          onChange={(e) => handleChange(e)}
          type="search"
          value={input}
          className="  rounded bg-white h-10 w-96 border-none"
        />{" "}
        <FontAwesomeIcon
          className="px-4"
          icon={faMagnifyingGlass}
          style={{ color: "#1E40AF" }}
        />
        <div className="searchResults absolute z-30 overflow-y-scroll bg-white max-h-[30vh] w-[32vw] mt-1 rounded-md shadow-md ">
          {input &&
            filteredResultset &&
            filteredResultset.length > 0 &&
            filteredResultset.map((result) => {
              return (
                <Link
                  to={`/product-details/${result._id}`}
                  onClick={handleLinkClick}
                >
                  <div className="border-b-2 text-sm p-1 hover:bg-slate-100 flex justify-between">
                    <span>{result.name}</span> <span>₹{result.price}</span>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
