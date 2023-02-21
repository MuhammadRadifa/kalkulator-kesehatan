import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const IntensitasAktivitas = () => {
  const { handler } = useContext(GlobalContext);
  const { onChangeHandler } = handler;

  return (
    <div>
      <h3 className='mb-2 text-xl font-medium'>Intesitas Aktivitas</h3>
      <div className='mb-5'>
        <ul className='grid w-full gap-2 md:grid-cols-3'>
          <li>
            <input
              type='radio'
              onChange={onChangeHandler}
              id='rendah'
              name='aktivitas'
              value='rendah'
              className='peer hidden'
              required
            />
            <label
              htmlFor='rendah'
              className='inline-flex h-full w-full cursor-pointer items-center justify-between rounded bg-secondary p-2 font-medium text-gray-300 shadow-sm peer-checked:bg-darkBlue peer-checked:text-white'
            >
              <div className='w-full text-center'>
                <h2>Rendah</h2>
                <p className='text-xs font-light'>(Tidak Ada Latihan)</p>
              </div>
            </label>
          </li>
          <li>
            <input
              onChange={onChangeHandler}
              type='radio'
              id='sedang'
              name='aktivitas'
              value='sedang'
              className='peer hidden'
            />
            <label
              htmlFor='sedang'
              className='inline-flex h-full w-full cursor-pointer items-center justify-between rounded bg-secondary p-2 font-medium text-gray-300 shadow-sm peer-checked:bg-darkBlue peer-checked:text-white'
            >
              <div className='w-full text-center'>
                <h2>Sedang</h2>
                <p className='text-xs font-light'>(3x - 4x per minggu)</p>
              </div>
            </label>
          </li>
          <li>
            <input
              type='radio'
              onChange={onChangeHandler}
              id='tinggi'
              name='aktivitas'
              value='tinggi'
              className='peer hidden'
              required
            />
            <label
              htmlFor='tinggi'
              className='inline-flex h-full w-full cursor-pointer items-center justify-between rounded bg-secondary p-2 font-medium text-gray-300 shadow-sm peer-checked:bg-darkBlue peer-checked:text-white'
            >
              <div className='w-full text-center'>
                <h2>Tinggi</h2>
                <p className='text-xs font-light'>(5+ per minggu)</p>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IntensitasAktivitas;
