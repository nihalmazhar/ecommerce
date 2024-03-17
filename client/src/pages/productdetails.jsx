import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FavoriteButton from "../components/favoriteButton";
import ImageSlider from "../components/ProductSlider/ProductSlider";
import Delivery from "../components/Delivery";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function productdetails() {
  const { itemId } = useParams();
  console.log(itemId);
  const [product, setProduct] = useState([]);
  const baseURL = "http://localhost:4000/api/items";

  const userID = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Handle case where token is not present
      console.error("Token not found in local storage");
      return;
    }

    // Set the Authorization header with the bearer token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try
    {const userresponse = await axios.get(
      "http://localhost:4000/api/user",
      config
    );
    console.log("data is ", userresponse.data);}

    catch(err) {console.log(err)}
  };

  userID();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(baseURL);

      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const selectedProduct = product.find((item) => item._id === itemId);

  const addToCart = async () => {
    try{
    const response = await axios.post(
      `http://localhost:4000/api/cart/65b22d061092dc4cb467558d`,
      { productId: itemId, quantity: 1 }
    );
    console.log(response.data);
    toast.info('Added to cart Successfully')}

    catch (err){
      console.log(err)
      toast.error('Failed to add product to cart')
    }
  };
  return (
    <div className="flex mx-6 my-6">
      <ToastContainer 
      position="bottom-center"
      autoClose={2500}
       />
      {selectedProduct && (
        <div className="left mb-8">
          <ImageSlider slideimages={selectedProduct.images} />
        </div>
      )}
      {selectedProduct && (
        <div className="right m-3 my-6 w-full">
          <div className="flex justify-between">
            <div className="text-blue-900 text-xl mt-3">
              {selectedProduct.name}
            </div>
            <div>
              {" "}
              <FavoriteButton
                productId={itemId}
                userId="65b22d061092dc4cb467558d"
              />
              
            </div>
          </div>
          <div className="text-gray-600 ">Brand : {selectedProduct.brand}</div>
          <div className="text-gray-600 my-6">
            Sold by: {selectedProduct.seller.toUpperCase()}
          </div>
          <div className="text-4xl font-semibold">
            {" "}
            ₹{selectedProduct.price}
          </div>
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
            <h3 className="text-blue-900 text-2xl font-semibold ">
              Description
            </h3>
            {selectedProduct.description}
          </div>
          <div><Delivery/></div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={addToCart}
              className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-80"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default productdetails;
