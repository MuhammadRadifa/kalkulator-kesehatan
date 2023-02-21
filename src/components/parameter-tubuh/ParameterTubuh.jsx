import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const ParameterTubuh = () => {
  const { state, handler } = useContext(GlobalContext);
  const { inputUserCalori } = state;
  const { onChangeHandler } = handler;

  return (
    <div>
      <div className='mb-8'>
        <p className='mb-2'>
          Saya berumur <span className='underline decoration-2'>{inputUserCalori.umur}</span> tahun
        </p>
        <input
          type='range'
          name='umur'
          value={inputUserCalori.umur}
          className='block w-full'
          min={1}
          onChange={onChangeHandler}
        />
      </div>
      <div className='mb-8'>
        <p className='mb-2'>
          Tinggi saya <span className='underline decoration-2'>{inputUserCalori.tinggi}</span> cm
        </p>
        <input
          type='range'
          name='tinggi'
          value={inputUserCalori.tinggi}
          className='block w-full'
          min={100}
          max={250}
          onChange={onChangeHandler}
        />
      </div>
      <div className='mb-8'>
        <p className='mb-2'>
          Berat saya <span className='underline decoration-2'>{inputUserCalori.berat}</span> kg
        </p>
        <input
          type='range'
          name='berat'
          value={inputUserCalori.berat}
          className='block w-full'
          min={1}
          max={250}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default ParameterTubuh;
