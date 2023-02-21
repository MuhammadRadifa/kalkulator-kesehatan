import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const Gender = () => {
  const { state, handler } = useContext(GlobalContext);
  const { onChangeHandler } = handler;

  return (
    <div>
      <div className='mb-5'>
        <ul className='grid w-full gap-4 md:grid-cols-2'>
          <li>
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
              className='inline-flex w-full cursor-pointer items-center justify-between rounded bg-secondary p-5 font-medium text-gray-300 shadow-sm peer-checked:bg-darkBlue peer-checked:text-white'
            >
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
              className='inline-flex w-full cursor-pointer items-center justify-between rounded bg-secondary p-5 font-medium text-gray-300 shadow-sm peer-checked:bg-darkBlue peer-checked:text-white'
            >
              <h2 className='mx-auto'>Perempuan</h2>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gender;
