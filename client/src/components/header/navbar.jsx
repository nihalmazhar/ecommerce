import React from "react";
import SearchBar from "./searchBar";
import WishList from "./wishList";
import Cart from "./cart";
import MyAccount from "./myAccount";
import HamMenu from "./hamMenu";

function Navbar() {
  return (
    <div className="flex">
      <nav className="bg-blue-100 flex items-center justify-between w-full">
        <div className="bg-blue-800 w-60 h-20 text-white text-4xl font-extrabold flex items-center justify-center">
          PARTSBAY
        </div>

        <SearchBar />

        <div className="flex w-[25vw] justify-evenly">
          <WishList />
          <Cart />
          <MyAccount />
          <HamMenu />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
