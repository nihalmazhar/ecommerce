import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Contact from "./pages/contact.jsx";
import Cart from "./pages/cart.jsx";
import WishList from "./pages/wishlist.jsx";
import ProductList from "./pages/productlisting.jsx";
import ProductlistingFilter from "./pages/productlisting-filter.jsx";
import ProductDetails from "./pages/productdetails.jsx";

import CheckoutSuccess from "./pages/checkoutSuccess.jsx";
import Admin from "./pages/admin.jsx";
import ProductAdd from "./pages/AddProduct.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layouts/layout.jsx";
import AuthLayout from "./Layouts/authLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="product-list" element={<ProductList/>}/>
        <Route path="product-list/:category" element={<ProductlistingFilter/>}/>
        <Route path="product-details/:itemId" element={<ProductDetails/>}/>
        <Route path="cart/:userID" element={<Cart/>} />
       
        <Route path="wishlist/:userID" element={<WishList />} />
        <Route path="contact" element={<Contact />} />
        <Route path="success" element={<CheckoutSuccess/>} />
        
      </Route>


      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="admin" element={<Admin />} />
      </Route>
      
      <Route path="/" >
          <Route path="admin" element={<Admin/>}/>
            <Route path="addproduct" element={<ProductAdd/>}/>
          <Route/>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
