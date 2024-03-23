import React from "react";
import { Link } from "react-router-dom";
function Allcategories() {

 
  return (
    <>

      <Link to={'/product-list'}>
        <div className="m-4 ml-8 font-semibold text-2xl text-blue-900 hover:text-blue-700 ">All Categories</div>
      </Link>
      <div className="flex justify-evenly flex-wrap my-4">
      
        <Link to="/product-list/Maintenance Service Parts">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 rounded -4 shadow-lg p-8 m-2 hover:m-1">
            <img className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/maintenance service parts.svg" />
            Maintenance Service Parts
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2 hover:m-1">
            <img className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/Air Conditioning.svg" />
            Air-Conditioning
          </div>
        </Link>
        <Link to="/product-list/Belts, Chains and Rollers">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2 hover:m-1">
            <img className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/belt_chain_and_roller.svg" />
            Belts, Chains and Rollers
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2 hover:m-1">
            <img className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/Bearing.svg" />
            Bearing
          </div>
        </Link>
        <Link to="/product-list/Body">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2 hover:m-1">
            <img className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/Body.svg" />
            Body
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2 hover:m-1">
            <img  className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/Brakes.svg" />
            Brakes
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2 hover:m-1">
            <img  className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/Accessories.svg" />
            Car Accessories
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2 hover:m-1">
            <img  className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/Clutch.svg" />
            Clutch System
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center  border-4 p-8 m-2 hover:m-1">
            <img  className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/Electronic components.svg" />
            Electronic components
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2 hover:m-1">
            <img  className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/Engine.svg" />
            Engine
          </div>
        </Link>
      </div>
    </>
  );
}

export default Allcategories;
