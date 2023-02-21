import React, { createContext, useState } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(0);

  const fetchDataFoods = async (food) => {
    const dataAPI = await axios.get(`${import.meta.env.VITE_API}ingr=${food}&nutrition-type=logging`);
    return dataAPI.data;
  };

  const handler = {
    fetchDataFoods,
  };

  const state = {
    data,
    setData,
  };

  return <GlobalContext.Provider value={{ state, handler }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
