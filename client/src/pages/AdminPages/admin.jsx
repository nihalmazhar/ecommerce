import React from "react";
import { NavLink } from "react-router-dom";
function admin() {
  return (
    <>
      <div className="flex justify-center m-4 bg-green-900">
        <h1 className="font-extrabold text-3xl text-white shadow-md">
          Admin Panel
        </h1>
      </div>
      <div className="m-4 h-10 bg-green-600 border-t-2 border-x-2 border-green-500 flex items-center justify-between">
        <NavLink
          className={({ isActive }) =>
            ` h-full w-full flex justify-center items-center px-2 ${
              isActive ? "bg-white text-black" : "bg-green-500 text-white"
            } `
          }
          to="/admin/addproduct"
        >
          Add Product{" "}
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            ` h-full w-full flex justify-center items-center px-2 ${
              isActive ? "bg-white text-black" : "bg-green-500 text-white"
            } `
          }
          to="/admin/editproduct"
        >
          View, edit and Delete Products{" "}
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            ` h-full w-full flex justify-center items-center px-2 ${
              isActive ? "bg-white text-black" : "bg-green-500 text-white"
            } `
          }
          to="/admin/banners"
        >
          Set Ad Banners{" "}
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            ` h-full w-full flex justify-center items-center px-2 ${
              isActive ? "bg-white text-black" : "bg-green-500 text-white"
            } `
          }
          to="/admin/orders"
        >
          {" "}
          View Orders{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` h-full w-full flex justify-center items-center px-2 ${
              isActive ? "bg-white text-black" : "bg-green-500 text-white"
            } `
          }
          to="/admin/customer-support"
        >
          {" "}
          Customer Support{" "}
        </NavLink>
      </div>
    </>
  );
}

export default admin;
