import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.jsx";


function EditProduct() {
  const baseURL = "http://localhost:4000/api/items";

  const [productList, setProductList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const fetchProductList = async () => {
    {
      try {
        const response = await axios.get(baseURL);
        setProductList(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    fetchProductList();
  }, []);

  const DeleteItem = async (itemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/items/${itemId}`
      );

      toast.success("Item deleted successfully");
      fetchProductList();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      {showModal &&
        createPortal(
          <ModalContent
            itemId={selectedItemId}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
      <ToastContainer position="bottom-center" autoClose={2500} />
      <div className="m-4 text-2xl font-semibold">Edit Product</div>
      {productList &&
        productList.map((item) => (
          <div
            className="border-2 border-gray-500 my-1 px-2 m-4"
            key={item._id}
          >
            <div className="flex gap-2 hover:bg-gray-300">
              <div className="min-w-[15vw] border-r-2">
                <span className="mr-1 font-bold">Name:</span>
                {item.name}
              </div>{" "}
              <div className="min-w-[25vw] border-r-2">
                {" "}
                <span className="mr-1 font-bold">Product ID:</span>
                {item._id}
              </div>
              <div className="min-w-[15vw] border-r-2">
                <span className="mr-1 font-bold">Price:</span>₹{item.price}
              </div>
              <div className="min-w-[15vw] border-r-2">
                <span className="mr-1 font-bold">Brand:</span>
                {item.brand}
              </div>
              <div className="flex flex-grow justify-end gap-2">
                <button
                  className="bg-blue-600 text-white p-1 px-4 m-1 rounded-md hover:bg-blue-800"
                  onClick={() => {
                    setShowModal(true);
                    setSelectedItemId(item._id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white p-1 px-2 m-1 rounded-md hover:bg-red-800"
                  onClick={() => {
                    DeleteItem(item._id);
                  }}
                >
                  {" "}
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default EditProduct;
