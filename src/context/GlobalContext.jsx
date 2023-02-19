import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(0);

  const handler = {};

  const state = {
    data,
    setData,
  };

  return <GlobalContext.Provider value={{ state, handler }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
