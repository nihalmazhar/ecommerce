import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ImageSlider from "../components/ProductSlider/ProductSlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function productdetails() {
  
  const {itemId} = useParams();
  console.log(itemId)
  const [product, setProduct] = useState([]);
  const baseURL = 'http://localhost:4000/api/items';

  useEffect(() => {
    const fetchProducts = async() => {
      try {
        const response = await axios.get(baseURL);
        console.log(response)
        setProduct(response.data);
        
      }
      catch(err){console.log(err)};
    }
    fetchProducts();
  },
  );


const selectedProduct = product.find((item) =>  item._id === itemId);
  
const addToCart = async() => await axios.post(`http://localhost:4000/api/cart/65b22d061092dc4cb467558d`, {productId:itemId, quantity: 1});
  return (
    <div className="flex mx-6 my-6">
      {selectedProduct && <div className="left mb-8">
        <ImageSlider
        slideimages={selectedProduct.images} />
      </div>}
      {selectedProduct && <div className="right m-3 my-6 w-full">
        <div>
          <div className="text-blue-900 text-xl mt-3">{selectedProduct.name}</div> 
        </div>
        <div className="text-gray-600 ">Brand : {selectedProduct.brand}</div>
        <div className="text-gray-600 my-6">{selectedProduct.seller}</div>
        <div className="text-4xl font-semibold"> ₹{selectedProduct.price}</div>
        <div className="flex my-6 w-full ">
          <div className="">
            <div className="text-gray-600">Part Number</div>
            <div className="font-medium">{selectedProduct.partNumber}</div>
          </div>
          <div className="mx-12">
            <div className="text-gray-600">Class</div>
            <div className="font-medium">{selectedProduct.category}</div>
          </div>
        </div>
        <div className="my-6 text-justify">
          <h3 className="text-blue-900 text-2xl font-semibold ">Description</h3>
          {selectedProduct.description}
        </div>
        <div className="flex justify-center"><button type="button" onClick={addToCart} className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-80">Add to Cart</button></div>

      </div>}
    </div>
  );
}

export default productdetails;
