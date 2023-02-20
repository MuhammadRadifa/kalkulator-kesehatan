import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Test = () => {
  const { handler } = useContext(GlobalContext);
  const { fetchDataFoods } = handler;

  useEffect(() => {
    const data = fetchDataFoods('apple');
  }, []);
  return <div>1</div>;
};

export default Test;
