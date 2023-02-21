import React, { useState } from 'react';

const ParameterTubuh = () => {
  const [umur, setUmur] = useState(18);
  const [tinggi, setTinggi] = useState(160);
  const [berat, setBerat] = useState(50);

  const handleUmur = (e) => {
    setUmur(e);
  };

  const handleTinggi = (e) => {
    setTinggi(e);
  };

  const handleBerat = (e) => {
    setBerat(e);
  };

  return (
    <div>
      <div className='mb-8'>
        <p className='mb-2'>
          Saya berumur <span className='underline decoration-2'>{umur}</span> tahun
        </p>
        <input
          type='range'
          value={umur}
          className='block w-full'
          min={1}
          onChange={(e) => handleUmur(e.target.value)}
        />
      </div>
      <div className='mb-8'>
        <p className='mb-2'>
          Tinggi saya <span className='underline decoration-2'>{tinggi}</span> cm
        </p>
        <input
          type='range'
          value={tinggi}
          className='block w-full'
          min={100}
          max={250}
          onChange={(e) => handleTinggi(e.target.value)}
        />
      </div>
      <div className='mb-8'>
        <p className='mb-2'>
          Berat saya <span className='underline decoration-2'>{berat}</span> kg
        </p>
        <input
          type='range'
          value={berat}
          className='block w-full'
          min={1}
          max={250}
          onChange={(e) => handleBerat(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ParameterTubuh;
