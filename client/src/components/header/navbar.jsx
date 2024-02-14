import React from "react";
import SearchBar from "./searchBar";
import WishList from "./wishList";
import Cart from "./cart";
import MyAccount from "./myAccount";
import HamMenu from "./hamMenu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex">
      <nav className="bg-blue-100 flex items-center justify-between w-full">
        <Link to='/'>
          <div className="bg-blue-800 w-60 h-20 text-white text-4xl font-extrabold flex items-center justify-center">
            PARTSBAY
          </div>
        </Link>

        <SearchBar />

        <div className="flex w-[25vw] justify-evenly items-center">
          <Link to='/wishlist'>
            <WishList />
          </Link>
          <Link to='/cart'>
            <Cart />
          </Link>
          <MyAccount />
          <HamMenu />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
