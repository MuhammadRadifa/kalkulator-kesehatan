import React, { createContext, useState } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [inputUserCalori, setInputUserCalori] = useState({
    umur: 18,
    tinggi: 160,
    berat: 50,
    gender: '',
    aktivitas: '',
    target: '',
  });

  const fetchDataFoods = async (food) => {
    const dataAPI = await axios.get(`${import.meta.env.VITE_API_NUTRISI}ingr=${food}&nutrition-type=logging`);
    return dataAPI.data;
  };

  const onChangeHandler = (event) => {
    setInputUserCalori({
      ...inputUserCalori,
      [event.target.name]: event.target.type == 'range' ? parseInt(event.target.value) : event.target.value,
    });
  };

  const handler = {
    fetchDataFoods,
    onChangeHandler,
  };

  const state = {
    inputUserCalori,
    setInputUserCalori,
  };

  return <GlobalContext.Provider value={{ state, handler }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
