import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function SetBanners() {
  const [bannersData, setBannersData] = useState([]);
  const [bannerValues, setBannerValues] = useState({});

  const fetchBanners = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/banners");
      setBannersData(response.data[0]);
      // Initialize bannerValues with fetched banner data
      const initialBannerValues = {};
      response.data[0].banner.forEach((value, index) => {
        initialBannerValues[`Banner${" " + (index + 1)}`] = value;
      });
      setBannerValues(initialBannerValues);
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBannerValues({ ...bannerValues, [id]: value });
  };

  const handleUpdate = async () => {
    try {
      const updatedBanners = Object.keys(bannerValues).map(
        (key) => bannerValues[key]
      );
      const updatedData = { ...bannersData, banner: updatedBanners };
      await axios.put("http://localhost:4000/api/banners", updatedData);

      toast.success("Banners updated successfully");
    } catch (error) {
      console.error("Error updating banners:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="m-4 w-[50vw]">
      <ToastContainer position="bottom-center" autoClose={2500} />
      <div className="flex flex-col gap-2 w-full ">
        {Object.keys(bannerValues).map((key, index) => (
          <div className="w-full" key={key}>
            <label htmlFor={key}>{`${key}:`}</label>
            <input
              className="w-full rounded-sm"
              type="text"
              id={key}
              value={bannerValues[key]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 m-2 ml-60 rounded-md"
        onClick={handleUpdate}
      >
        Update
      </button>
    </div>
  );
}

export default SetBanners;
