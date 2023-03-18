import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { FormTitle } from '../../layout';

const TitleDepresi = () => {
  const { dataAplikasi } = useContext(GlobalContext);
  const [dataTitle, setDataTitle] = useState({});
  const pathName = window.location.pathname;
  const pathTitle = pathName.slice(1);

  useEffect(() => {
    const data = dataAplikasi.filter((item) => item.title.toLowerCase().split(' ')[1] === pathTitle.split('-')[1]);
    setDataTitle(data[0]);
  }, []);

  return (
    <FormTitle status={status}>
      <img src={dataTitle.icon} alt='Kalkulator' className='mb-9 w-32' />
      <h1 className='mb-9 text-5xl font-semibold text-gray-700'>{dataTitle.title}</h1>
      <p className='text-slate-400'>{dataTitle.desc}</p>
    </FormTitle>
  );
};

export default TitleDepresi;
