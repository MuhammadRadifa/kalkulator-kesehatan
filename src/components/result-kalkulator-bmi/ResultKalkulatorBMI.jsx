import React from 'react';
import { Result } from '../../layout';

const ResultKalkulatorBMI = ({ status, data }) => {
  const { total, keadaan } = data;
  console.info(data);
  return <Result status={status}>{total}</Result>;
};

export default ResultKalkulatorBMI;
