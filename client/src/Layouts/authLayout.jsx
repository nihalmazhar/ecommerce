import React from "react";
import { Outlet } from "react-router-dom";

function authLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default authLayout;
