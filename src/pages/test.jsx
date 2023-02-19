import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Test = () => {
  const { state } = useContext(GlobalContext);
  console.log(state);
  const { data } = state;
  return <div>{data}</div>;
};

export default Test;
