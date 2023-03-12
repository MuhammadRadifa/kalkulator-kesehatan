import { useEffect, useState } from 'react';
import { Energi, Expresso, Kopi, Soda, Teh, TehHijau } from '../../assets';
import { FormLayout } from '../../layout';
import TitleKafein from '../title/TitleKafein';

const FormKalkulatorKafein = () => {
  const [status, setStatus] = useState(false);
  const [info, setInfo] = useState({
    total: '',
    dosis: 'remaja',
    dosisInfo: '',
  });
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState(0);
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

  const tambah = (index) => {
    const update = [...items];
    update[index].qty++;
    const filteredUpdate = update.filter((element) => element.qty > 0);
    setResult(filteredUpdate);
    setInfo({ ...info, total: 'tambah' });
  };

  const kurang = (index) => {
    const update = [...result];
    update[index].qty--;
    const filteredUpdate = update.filter((element) => element.qty > 0);
    setResult(filteredUpdate);
    setInfo({ ...info, total: 'kurang' });
  };

  const dosisHandler = (e) => {
    setInfo({ ...info, dosis: e.target.value });
    const dosis = {
      remaja: 100,
      dewasa: 400,
      hamil: 200,
    };
    if (total > dosis[e.target.value]) {
      setInfo({ ...info, dosis: 'bahaya' });
    }

    console.log(info.dosisInfo);
  };

  useEffect(() => {
    if (result.length > 0) {
      result.forEach((e) => {
        if (info.total == 'tambah') {
          setTotal(total + e.kafein * 1);
        } else if (info.total == 'kurang') {
          setTotal(total - e.kafein * 1);
        }
      });
    } else {
      setTotal(0);
    }
    const dosis = {
      remaja: 100,
      dewasa: 400,
      hamil: 200,
    };
    if (total > dosis[info.dosis]) {
      setInfo({ ...info, dosis: 'bahaya' });
    }
  }, [result]);

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
      <div className='relative mx-auto grid w-full items-start rounded-lg bg-gray-100 p-4 text-center text-gray-500 shadow-lg md:h-3/4 md:w-2/3'>
        <div className='w-full self-start'>
          <h1 className='my-5 text-2xl font-semibold'>KALKULATOR KAFEIN</h1>
          <div className='flex justify-between border-b border-dashed border-gray-500'>
            <p>ITEM</p>
            <p>QTY</p>
            <p>KAFEIN</p>
          </div>
          <div className='w-full py-4 text-left'>
            {status ? (
              result.map((item, index) => {
                return (
                  <div className='grid w-full grid-cols-3 items-center' key={index}>
                    <p>{item.nama}</p>
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
          <div className='text-left'>
            <p className='text-xl'>Maksimal Rekomendasi Dosis:</p>
            <div className='flex items-center text-xl'>
              <select name='dosis' id='dosis' className='my-5 mr-4 px-5 py-2 outline-main' onChange={dosisHandler}>
                <option value='remaja'>Remaja</option>
                <option value='dewasa'>Dewasa</option>
                <option value='hamil'>Hamil</option>
              </select>
              <p>200 mg</p>
            </div>
          </div>
          <h2
            className={`flex justify-between border-y border-dashed border-gray-500 py-2 text-2xl font-semibold ${
              info.dosis == 'bahaya' ? 'text-red-500' : ''
            }`}
          >
            TOTAL :<span className='text-right'>{total} mg</span>
          </h2>
        </div>
      </div>
    </FormLayout>
  );
};

export default FormKalkulatorKafein;
