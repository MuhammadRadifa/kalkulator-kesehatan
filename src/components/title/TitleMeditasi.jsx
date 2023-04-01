import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { FormTitle } from '../../layout';

const TitleMeditasi = ({ status }) => {
  const { dataAplikasi } = useContext(GlobalContext);
  const [dataTitle, setDataTitle] = useState({});
  const pathName = window.location.pathname;
  const pathTitle = pathName.slice(1);

  useEffect(() => {
    const data = dataAplikasi.filter((item) => item.title.toLowerCase() === pathTitle);
    setDataTitle(data[0]);
  }, []);

  return (
    <FormTitle status={status}>
      <img src={dataTitle.icon} alt='Kalkulator' className='mb-9 w-32' />
      <h1 className='mb-9 text-5xl font-semibold text-gray-700'>{dataTitle.title}</h1>
      <p className='p-3 text-sm text-slate-400 md:p-0 md:text-base'>{dataTitle.desc}</p>
    </FormTitle>
  );
};

export default TitleMeditasi;
