import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import ImageSlider from "../components/ProductSlider/ProductSlider";
import Addtocartbutton from '/src/components/addToCartButton.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function productdetails() {
  return (
    <div className="flex mx-6">
      <div className="left ">
        <ImageSlider />
      </div>
      <div className="right m-3 my-6 ">
        <div className="text-blue-900 text-xl my-6">Timing Belt</div>
        <div className="text-gray-600 my-6">Sold by:TKL</div>
        <div className="text-4xl font-semibold"> ₹1,420</div>
        <div className="flex my-6 ">
          <div className="">
            <div className="text-gray-600">Part Number</div>
            <div className="font-medium">KLA1234-546</div>
          </div>
          <div className="mx-12">
            <div className="text-gray-600">Class</div>
            <div className="font-medium">Timing Belt</div>
          </div>
        </div>
        <div className="my-6 text-justify">
          <h3 className="text-blue-900 text-2xl font-semibold ">Description</h3>
          This type of timing belt is suitable for all Ford Fiesta Models.This type of timing belt is suitable for all Ford Fiesta Models.This type of timing belt is suitable for all Ford Fiesta Models.This type of timing belt is suitable for all Ford Fiesta ModelsThis type of timing belt is suitable for all Ford Fiesta Models
        </div>
        <div className="flex justify-center"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-80">Add to Cart</button></div>

      </div>
    </div>
  );
}

export default productdetails;
