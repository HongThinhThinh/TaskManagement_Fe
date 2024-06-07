import React from "react";
import Sidebar from "../sidebar";
import { Outlet } from "react-router-dom";
import "./index.scss";
import background from "../../assets/img/background.svg";
import logo from "../../assets/img/logo.png";
import { useStateValue } from "../../assets/context/stateProdiveder";
// import { useStateValue } from "../../assets/context/stateProdiveder";
function Layout() {
  const { isLighting, setIsLighting } = useStateValue();
  const bg = isLighting ? background : logo;
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="layout bg-black w-full h-lvh text-white ]"
    >
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
