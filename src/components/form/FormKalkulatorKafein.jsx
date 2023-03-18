import { useEffect, useState } from 'react';
import { Energi, Expresso, Kopi, Soda, Teh, TehHijau } from '../../assets';
import { FormLayout } from '../../layout';
import TitleKafein from '../title/TitleKafein';

const FormKalkulatorKafein = () => {
  const [status, setStatus] = useState(false);
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState(0);
  const [kafeinLimit, setKafeinLimit] = useState({
    limit: 400,
    info: false,
  });
  const [items] = useState([
    {
      nama: 'Kopi',
      qty: 0,
      icon: Kopi,
      takaran: 190,
      tempat: 'cup',
      satuan: 'g',
      kafein: 50,
    },
    {
      nama: 'Teh',
      qty: 0,
      icon: Teh,
      takaran: 350,
      tempat: 'mug',
      satuan: 'g',
      kafein: 100,
    },
    {
      nama: 'Minuman Soda',
      qty: 0,
      icon: Soda,
      takaran: 330,
      tempat: 'can',
      satuan: 'ml',
      kafein: 40,
    },
    {
      nama: 'Minuman Energi',
      qty: 0,
      icon: Energi,
      takaran: 250,
      tempat: 'can',
      satuan: 'ml',
      kafein: 50,
    },
    {
      nama: 'Teh Hijau',
      qty: 0,
      icon: TehHijau,
      takaran: 190,
      tempat: 'cup',
      satuan: 'g',
      kafein: 40,
    },
    {
      nama: 'Expresso',
      qty: 0,
      icon: Expresso,
      takaran: 'shots',
      tempat: 'shots',
      satuan: 'mg',
      kafein: 45,
    },
  ]);

  const optDosis = [
    { value: 400, label: 'Dewasa' },
    { value: 200, label: 'Hamil' },
    { value: 100, label: 'Remaja' },
  ];

  const tambah = (index) => {
    const update = [...items];
    update[index].qty++;
    const filteredUpdate = update.filter((element) => element.qty > 0);
    setResult(filteredUpdate);
    setTotal(filteredUpdate.reduce((acc, val) => acc + val.kafein * val.qty, 0));
  };

  const kurang = (index) => {
    const update = [...result];
    update[index].qty--;
    const filteredUpdate = update.filter((element) => element.qty > 0);
    setResult(filteredUpdate);
    setTotal(filteredUpdate.reduce((acc, val) => acc + val.kafein * val.qty, 0));
  };

  const dosisHandler = (e) => {
    setKafeinLimit({ ...kafeinLimit, limit: e.target.value });
  };

  useEffect(() => {
    if (total > kafeinLimit.limit) {
      setKafeinLimit({ ...kafeinLimit, info: true });
    } else {
      setKafeinLimit({ ...kafeinLimit, info: false });
    }
  }, [total, kafeinLimit.limit]);

  return (
    <FormLayout>
      {status ? (
        <div className='grid w-full grid-cols-2 items-center justify-center gap-5 md:px-32'>
          {items &&
            items.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => tambah(index)}
                  className='flex flex-col items-center justify-center rounded-lg bg-main p-5 text-white hover:opacity-80'
                >
                  <img src={item.icon} alt='icon' className='w-20 md:w-32' />
                  <h3 className='text-sm font-semibold md:text-xl'>{item.nama}</h3>
                  <p className='text-xs md:text-base'>
                    ({item.takaran}/{item.tempat})
                  </p>
                </button>
              );
            })}
        </div>
      ) : (
        <TitleKafein />
      )}
      <div className='relative mx-auto grid w-full items-start rounded-lg bg-gray-50 p-4 text-center text-gray-500 shadow-lg md:h-3/4 md:w-2/3'>
        <div className='w-full self-start'>
          <h1 className='my-5 text-2xl font-semibold'>KALKULATOR KAFEIN</h1>
          <div
            className={`${status ? '' : 'text-gray-50'} flex justify-between border-b border-dashed border-gray-500`}
          >
            <p>ITEM</p>
            <p>QTY</p>
            <p>KAFEIN</p>
          </div>
          <div className='w-full py-4 text-left'>
            {status ? (
              result.map((item, index) => {
                return (
                  <div className='grid w-full grid-cols-3 items-center' key={index}>
                    <p className=''>{item.nama}</p>
                    <p className='justify-self-center'>{item.qty}</p>
                    <div className='flex gap-x-2 justify-self-end'>
                      <p>{item.kafein * item.qty} mg</p>
                      <button className='font-semibold hover:text-red-500' onClick={() => kurang(index)}>
                        &times;
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <button
                className='mx-auto block rounded-lg bg-main px-5 py-3 text-xl text-white shadow-md hover:opacity-80 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2'
                onClick={() => setStatus(true)}
              >
                Mulai Sekarang
              </button>
            )}
          </div>
        </div>
        <div className='self-end'>
          {status && (
            <div className='text-left'>
              <p className='text-xl'>Maksimal Rekomendasi Dosis:</p>
              <div className='flex items-center text-xl'>
                <select
                  name='dosis'
                  id='dosis'
                  className='my-5 mr-4 rounded-lg bg-gray-100 px-5 py-2 text-slate-500 outline-main'
                  onChange={dosisHandler}
                >
                  {optDosis &&
                    optDosis.map((item, index) => {
                      return (
                        <option value={item.value} key={index}>
                          {item.label}
                        </option>
                      );
                    })}
                </select>
                <p>: {kafeinLimit.limit} mg</p>
              </div>
            </div>
          )}
          <h2
            className={`${
              status ? '' : 'text-gray-50'
            } flex justify-between border-y border-dashed border-gray-500 py-2 text-2xl font-semibold `}
          >
            TOTAL :<span className={`${kafeinLimit.info ? 'text-red-500' : ''} text-right`}>{total} mg</span>
          </h2>
        </div>
      </div>
    </FormLayout>
  );
};

export default FormKalkulatorKafein;
