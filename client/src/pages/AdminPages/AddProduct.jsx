import React from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
function productAdd() {
  const baseURL = "http://localhost:4000/api/items";

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const CategoryOptions = [
    { value: "Maintenance Service Parts", label: "Maintenance Service Parts" },
    { value: "Belts, Chains and Rollers", label: "Belts, Chains and Rollers" },
    { value: "Body", label: "Body" },
  ];

  const OriginOptions = [
    {value:'OEM', label:'OEM'},
    {value:"Aftermarket", label:'Aftermarket'}
  ]

  const onSubmit = async (data) => {
    const category = data.category.value;
    const origin = data.origin.value;
    const newData = {
      ...data,
      category: category,
      origin: origin,
    };
    try{await axios.post(baseURL, newData);
    console.log(data);
    toast.success('Successfully added Product')}

    catch(err){
        console.log(err)
        toast.error('Something went wrong')}
  
  };

  return (
    <>
    <ToastContainer position="bottom-center" autoClose={2500}
        />
      <div className="productAddForm m-8">
        <h2 className="text-2xl font-semibold">Add New Product Details</h2>
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-1">
            <div>
              <label name="name" className="block">
                Name*
              </label>
              <input
                className="rounded-md"
                type="text"
                name="name"
                id="name"
                {...register("name")}
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
                {...register("price")}
                placeholder="Enter Product Price"
                required
              />
            </div>
            <div>
              <label name="cateogry" className="block">
                Category*
              </label>
              <Controller
                  control={control}
                  name="category"
                  render ={ ({field}) => (<Select
                className="rounded-md min-w-80"
                type="text"
                name="category"
                id="category"
                options={CategoryOptions}
                {...field}
                placeholder="Enter Product category"
                required
              />)}
              />
            </div>
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
              {...register("description")}
              placeholder="Enter Product Description"
              required
            />
          </div>
          <div className="flex space-x-1">
            <div>
              <label name="images" className="block">
                Images*
              </label>
              <input
                className="rounded-md"
                type="text"
                name="images"
                id="images"
                {...register("images.[0]")}
                placeholder="Enter Product image links"
                required
              />
            </div>
            <div>
              <label name="images" className="block">
                Images*
              </label>
              <input
                className="rounded-md"
                type="text"
                name="images"
                id="images"
                {...register("images.[1]")}
                placeholder="Enter Product image links"
                required
              />
            </div>
            <div>
              <label name="images" className="block">
                Images*
              </label>
              <input
                className="rounded-md"
                type="text"
                name="images"
                id="images"
                {...register("images.[2]")}
                placeholder="Enter Product image links"
                required
              />
            </div>
            <div>
              <label name="images" className="block">
                Images*
              </label>
              <input
                className="rounded-md"
                type="text"
                name="images"
                id="images"
                {...register("images.[3]")}
                placeholder="Enter Product image links"
                required
              />
            </div>
          </div>
          <div className="flex gap-1">
            <div>
              <label name="seller" className="block">
                Seller*
              </label>
              <input
                className="rounded-md"
                type="text"
                name="seller"
                id="seller"
                {...register("seller")}
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
                {...register("brand")}
                placeholder="Enter Product Brand"
                required
              />
            </div>
            <div>
              <label name="origin" className="block">
                Origin*
              </label>
              <Controller
              className='pb-6'
              control={control}
              name="origin"
              render= {({field}) => (<Select
                className="rounded-md pb-6"
                type="text"
                name="origin"
                id="origin"
                options={OriginOptions}
                {...field}
                placeholder="Enter Product Origin"
                required
              />)}
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
                {...register("partNumber")}
                placeholder="Enter Product Part Number"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add product
          </button>
        </form>
      </div>
    </>
  );
}

export default productAdd;
