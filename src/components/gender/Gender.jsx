import React, { useContext } from 'react';
import { MonoMan, MonoWoman } from '../../assets';
import { GlobalContext } from '../../context/GlobalContext';

const Gender = ({ content }) => {
  const { state, handler } = useContext(GlobalContext);
  const { onChangeHandler } = handler;

  return (
    <div>
      <div className='mb-5'>
        <ul className='grid w-full gap-4 md:grid-cols-2'>
          <li className='flex flex-col items-center justify-center'>
            <input
              type='radio'
              onChange={onChangeHandler}
              id='pria'
              name='gender'
              value='pria'
              className='peer hidden'
              required
            />
            <label
              htmlFor='pria'
              className='flex h-full w-full cursor-pointer flex-col items-center justify-between rounded bg-secondary p-5 font-medium text-gray-300 shadow-sm peer-checked:bg-darkBlue peer-checked:text-white'
            >
              {content == 'bmi' && <img src={MonoMan} className='w-24' alt='Laki' />}
              <h2 className='mx-auto'>Laki-Laki</h2>
            </label>
          </li>
          <li>
            <input
              onChange={onChangeHandler}
              type='radio'
              id='wanita'
              name='gender'
              value='wanita'
              className='peer hidden'
            />
            <label
              htmlFor='wanita'
              className='flex h-full w-full cursor-pointer flex-col items-center justify-between rounded bg-secondary p-5 font-medium text-gray-300 shadow-sm peer-checked:bg-darkBlue peer-checked:text-white'
            >
              {content == 'bmi' && <img src={MonoWoman} className='w-24' alt='Perempuan' />}
              <h2 className='mx-auto'>Perempuan</h2>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gender;
