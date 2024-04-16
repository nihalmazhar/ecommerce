import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import UserContextProvider from "./Context/UserContextProvider.jsx";
import CartContextProvider from "./Context/CartContextProvider.jsx";

import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/home.jsx";
import Cart from "./pages/cart.jsx";
import WishList from "./pages/wishlist.jsx";
import Orders from "./pages/orders.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import ProductList from "./pages/productlisting.jsx";
import ProductlistingFilter from "./pages/productlisting-filter.jsx";
import ProductDetails from "./pages/productdetails.jsx";
import Contact from "./pages/contact.jsx";
import CheckoutSuccess from "./pages/checkoutSuccess.jsx";

import Admin from "./pages/AdminPages/admin.jsx";
import ProductAdd from "./pages/AdminPages/AddProduct.jsx";
import EditProduct from "./pages/AdminPages/EditProduct.jsx";
import SetBanners from "./pages/AdminPages/SetBanners.jsx";
import CustomerSupport from "./pages/AdminPages/CustomerSupport.jsx";
import ViewOrders from "./pages/AdminPages/ViewOrders.jsx";

import Layout from "./Layouts/layout.jsx";
import AuthLayout from "./Layouts/authLayout.jsx";
import AdminPanelLayout from "./Layouts/AdminPanelLayout.jsx";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="product-list" element={<ProductList />} />
        <Route
          path="product-list/:category"
          element={<ProductlistingFilter />}
        />
        <Route path="product-details/:itemId" element={<ProductDetails />} />
        <Route path="cart/:userID" element={<Cart />} />
        <Route path="orders/:userID" element={<Orders />} />
        <Route path="wishlist/:userID" element={<WishList />} />
        <Route path="contact" element={<Contact />} />
        <Route path="success" element={<CheckoutSuccess />} />
        <Route path="account/:userID" element={<MyAccount />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        
      </Route>

      <Route path="/admin" element={<AdminPanelLayout/>} >
        
          <Route path="addproduct" element={<ProductAdd />} />
          <Route path="editproduct" element={<EditProduct />} />
          <Route path="banners" element={<SetBanners />} />
          <Route path="orders" element={<ViewOrders />} />
          <Route path="customer-support" element={<CustomerSupport />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
     <UserContextProvider>
        <CartContextProvider>
         <RouterProvider router={router} />
        </CartContextProvider>
      </UserContextProvider>
  </React.StrictMode>
);
