import React from "react";
import { Outlet } from "react-router-dom";
import Admin from "../pages/AdminPages/admin";
function AdminPanelLayout() {
  return (
    <>
      <Admin />
      <Outlet />
      

    </>
  );
}

export default AdminPanelLayout;
