import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { Outlet } from "react-router-dom";
import "./index.scss";
import background from "../../assets/img/background.svg";
import bgLight from "../../assets/img/bg-light.avif";
import { useStateValue } from "../../assets/context/stateProdiveder";
// import { useStateValue } from "../../assets/context/stateProdiveder";
function Layout() {
  const [isLighting, setIsLighting] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isLighting");
    return storedValue !== null ? JSON.parse(storedValue) : false;
  });

  console.log(isLighting);

  useEffect(() => {
    localStorage.setItem("isLighting", JSON.stringify(isLighting));
  }, [isLighting]);

  const bg = isLighting ? bgLight : background;
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "bottom",
      }}
      className="layout bg-black w-full h-lvh text-white ]"
    >
      <div className="flex h-full">
        <div className="w-[20%]">
          <Sidebar setIsLighting={setIsLighting} isLighting={isLighting} />
        </div>
        <div className="flex-[1]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
