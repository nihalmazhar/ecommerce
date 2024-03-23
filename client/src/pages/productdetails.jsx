import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FavoriteButton from "../components/favoriteButton";
import AddToCartButton from "../components/addToCartButton";
import ImageSlider from "../components/ProductSlider/ProductSlider";
import Delivery from "../components/Delivery";

import UserContext from "../Context/UserContext";

function productdetails() {
  const { user } = useContext(UserContext);
  const userID = user;
  console.log('prod', userID)
  if (!user) return <div>Loading</div>;

  const { itemId } = useParams();

  console.log(itemId);
  const [product, setProduct] = useState([]);
  const baseURL = "http://localhost:4000/api/items";

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
  console.log('axios',userID)
  const addToCart = async () => {
    try {
      
      const response = await axios.post(
        `http://localhost:4000/api/cart/${userID}`,
        { productId: itemId, quantity: 1 }
      );
      console.log(response.data);
      toast.info("Added to cart Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add product to cart");
    }
  };
  return (
    <div className="flex mx-6 my-6">
      <ToastContainer position="bottom-center" autoClose={2500} />
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
              <FavoriteButton productId={itemId} userId={userID} />
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
          <div>
            <Delivery />
          </div>
          <div className="flex justify-center">
            <div className="w-80">
              <AddToCartButton 
              productId={itemId}
              userID={userID}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default productdetails;
