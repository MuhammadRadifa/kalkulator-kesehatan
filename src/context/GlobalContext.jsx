import React, { createContext, useState } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(0);

  const fetchDataFoods = async (food) => {
    const dataAPI = await axios.get(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=d89b4317&app_key=5b8e31b7dab61c32507f1668fbf52697&ingr=${food}&nutrition-type=logging`
    );
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
