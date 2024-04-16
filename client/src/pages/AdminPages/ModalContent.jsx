import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { CATEGORY_OPTIONS, ORIGIN_OPTIONS } from "../../dropdownOptions";

export default function ModalContent({ onClose, itemId }) {
  const [productData, setProductData] = useState([]);
  const [newSelectedProduct, setNewSelectedProduct] = useState(null);

  const baseURL = "http://localhost:4000/api/items";

  const fetchProducts = async () => {
    try {
      const response = await axios.get(baseURL);
      setProductData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const selectedProduct = productData.find((item) => item._id === itemId);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSelectedProduct({
      ...newSelectedProduct,
      [name]: value,
    });
  };

  const SelectHandleChange = (selectedOption) => {
    setNewSelectedProduct({
      ...newSelectedProduct,
      category: selectedOption.value, // Assuming 'category' is the property you want to update
    });
  };

  const SelectOriginHandleChange = (selectedOption) => {
    setNewSelectedProduct({
      ...newSelectedProduct,
      origin: selectedOption.value, // Assuming 'category' is the property you want to update
    });
  };

  const handleImagesChange = (index, e) => {
    const newImages = [...newSelectedProduct.images];
    newImages[index] = e.target.value;
    setNewSelectedProduct({
      ...newSelectedProduct,
      images: newImages,
    });
  };

  useEffect(() => {
    const selectedProduct = productData.find((item) => item._id === itemId);
    setNewSelectedProduct(selectedProduct);
  }, [productData, itemId]);

  console.log("this is", newSelectedProduct);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `${baseURL}/${itemId}`,
        newSelectedProduct
      );
      console.log(response.data);
      toast.success("Successfully updated");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  const CategoryOptions = CATEGORY_OPTIONS;

  const OriginOptions = ORIGIN_OPTIONS;

  if (newSelectedProduct)
    return (
      <>
        <ToastContainer position="bottom-center" autoClose={2500} />
        <div className=" fixed inset-0 bg-black bg-opacity-70"></div>
        <div className=" modal bg-white border-2 shadow-md rounded-md p-2 absolute left-2/4 top-2/4 transform -translate-x-1/2 -translate-y-1/2  w-[40vw] h-[80vh]">
          <div className="flex justify-between">
            {" "}
            <div className="font-semibold text-2xl">Edit Product</div>
            <button
              onClick={onClose}
              className="border-2  px-1 rounded-md hover:bg-gray-300"
            >
              Close X
            </button>{" "}
          </div>

          <div className="h-[80%] overflow-y-scroll">
            <div className="my-1 text-gray-500">
              <span className="mr-1">Product ID :</span>
              {selectedProduct._id}{" "}
            </div>
            <div className="flex gap-2">
              <div>
                <label name="name" className="block">
                  Name*
                </label>
                <input
                  className="rounded-md"
                  type="text"
                  name="name"
                  id="name"
                  value={newSelectedProduct.name}
                  onChange={handleChange}
                  placeholder="Enter Product Name"
                  required
                />
              </div>
              <div>
                <label name="price" className="block">
                  Price*
                </label>
                <input
                  className="rounded-md"
                  type="number"
                  name="price"
                  id="price"
                  value={newSelectedProduct.price}
                  onChange={handleChange}
                  placeholder="Enter Product Price"
                  required
                />
              </div>
            </div>
            <div>
              <label name="cateogry" className="block">
                Category*
              </label>
              <Select
                className="rounded-md w-60 "
                type="text"
                name="category"
                id="category"
                defaultValue={{
                  value: selectedProduct.category,
                  label: selectedProduct.category,
                }}
                onChange={SelectHandleChange}
                options={CategoryOptions}
                placeholder="Enter Product category"
                required
              />
            </div>
            <div className="flex flex-col w-[95%] ">
              <div>
                <label name="images" className="block">
                  Images*
                </label>
                <input
                  className="rounded-md w-full"
                  type="text"
                  name="images"
                  id="images"
                  value={newSelectedProduct.images[0]}
                  onChange={(e) => handleImagesChange(0, e)}
                  placeholder="Enter Product image links"
                  required
                />
              </div>
              <div>
                <label name="images" className="block">
                  Images*
                </label>
                <input
                  className="rounded-md w-full"
                  type="text"
                  name="images"
                  id="images"
                  value={newSelectedProduct.images[1]}
                  onChange={(e) => handleImagesChange(1, e)}
                  placeholder="Enter Product image links"
                  required
                />
              </div>
              <div>
                <label name="images" className="block">
                  Images*
                </label>
                <input
                  className="rounded-md w-full"
                  type="text"
                  name="images"
                  id="images"
                  value={newSelectedProduct.images[2]}
                  onChange={(e) => handleImagesChange(2, e)}
                  placeholder="Enter Product image links"
                  required
                />
              </div>
              <div>
                <label name="images" className="block">
                  Images*
                </label>
                <input
                  className="rounded-md w-full"
                  type="text"
                  name="images"
                  id="images"
                  value={newSelectedProduct.images[3]}
                  onChange={(e) => handleImagesChange(3, e)}
                  placeholder="Enter Product image links"
                  required
                />
              </div>
            </div>
            <div>
              <label name="seller" className="block">
                Seller*
              </label>
              <input
                className="rounded-md"
                type="text"
                name="seller"
                id="seller"
                value={newSelectedProduct.seller}
                onChange={handleChange}
                placeholder="Enter Product Seller"
                required
              />
            </div>
            <div>
              <label name="brand" className="block">
                Brand*
              </label>
              <input
                className="rounded-md"
                type="text"
                name="brand"
                id="brand"
                value={newSelectedProduct.brand}
                onChange={handleChange}
                placeholder="Enter Product Brand"
                required
              />
            </div>

            <div>
              <label name="origin" className="block">
                Origin*
              </label>
              <Select
                className="rounded-md  w-60"
                type="text"
                name="origin"
                id="origin"
                defaultValue={{
                  value: selectedProduct.origin,
                  label: selectedProduct.origin,
                }}
                onChange={SelectOriginHandleChange}
                options={OriginOptions}
                placeholder="Enter Product Origin"
                required
              />
            </div>
            <div>
              <label name="partNumber" className="block">
                Part Number*
              </label>
              <input
                className="rounded-md"
                type="text"
                name="partNumber"
                id="partNumber"
                value={newSelectedProduct.partNumber}
                onChange={handleChange}
                placeholder="Enter Product Part Number"
                required
              />
            </div>
            <div>
              <label name="description" className="block">
                Description*
              </label>
              <input
                className="rounded-md"
                type="text"
                name="description"
                id="description"
                value={newSelectedProduct.description}
                onChange={handleChange}
                placeholder="Enter Product Description"
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white p-1 px-2 m-2 rounded-md hover:bg-green-700 "
            >
              Update
            </button>
          </div>
        </div>
      </>
    );
}
