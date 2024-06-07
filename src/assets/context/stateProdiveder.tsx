import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLighting, setIsLighting] = useState(() => {
    return JSON.parse(localStorage.getItem("isLighting")) || false;
  });

  const state = {
    data,
    setData,
    isLighting,
    setIsLighting,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
