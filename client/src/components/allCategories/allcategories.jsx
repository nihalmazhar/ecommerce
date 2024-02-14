import React from "react";
import { Link } from "react-router-dom";
function Allcategories() {
  return (
    <>
      <div className="flex justify-evenly flex-wrap my-10">
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2">
            <img className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/maintenance service parts.svg" />
            Maintenance Service Parts
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2">
            <img className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/maintenance service parts.svg" />
            Air-COnditioning
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2">
            <img className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/maintenance service parts.svg" />
            Belts, Chains and Rollers
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2">
            <img className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/maintenance service parts.svg" />
            Bearing
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2">
            <img className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/maintenance service parts.svg" />
            Body
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2">
            <img  className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/maintenance service parts.svg" />
            Brakes
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2">
            <img  className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/maintenance service parts.svg" />
            Car Accessories
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2">
            <img  className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/maintenance service parts.svg" />
            Clutch System
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center  border-4 p-8 m-2">
            <img  className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/maintenance service parts.svg" />
            Electronic components
          </div>
        </Link>
        <Link to="/">
          <div className="w-[17vw] h-[40vh] flex flex-col text-center justify-center items-center border-4 p-8 m-2">
            <img  className='mb-3 w-[8rem] h-[8rem]' src="./src/assets/categoryIcons/maintenance service parts.svg" />
            Engine
          </div>
        </Link>
      </div>
    </>
  );
}

export default Allcategories;
