import React from "react";
import Sidebar from "../sidebar";
import { Outlet } from "react-router-dom";
import "./index.scss";
function Layout() {
  return (
    <div className="layout bg-black w-full h-lvh text-white">
      <div className="flex h-full">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="flex-[1]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
