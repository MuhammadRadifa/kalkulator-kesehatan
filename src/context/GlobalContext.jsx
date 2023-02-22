import React, { createContext, useState } from 'react';

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

  const onChangeHandler = (event) => {
    setInputUserCalori({
      ...inputUserCalori,
      [event.target.name]: event.target.type == 'range' ? parseInt(event.target.value) : event.target.value,
    });
  };

  const handler = {
    onChangeHandler,
  };

  const state = {
    inputUserCalori,
    setInputUserCalori,
  };

  return <GlobalContext.Provider value={{ state, handler }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
