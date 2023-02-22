import { ParameterKurus, ParameterNormal, ParameterObesitas } from '../../assets';

const BMI = (berat, tinggi, gender) => {
  let hasil = {};
  tinggi = tinggi / 100;
  const total = parseFloat(berat / (tinggi * tinggi)).toFixed(1);

  if (total > 27) {
    hasil = {
      title: <h2 className='text-4xl font-semibold text-red-500'>Obesitas</h2>,
      desc: 'Kelebihan berat badan tingkat berat',
      pesan: (
        <p>
          Dalam 60% kasus, <span className='text-red-500'>pola makan yang buruk</span> dapat
          <span className='text-red-500'> berisiko</span> Diabetes.
        </p>
      ),
      imageParameter: ParameterObesitas,
    };
  } else if (total > 25.1 && total < 26.9) {
    hasil = {
      title: <h2 className='text-4xl font-semibold text-red-500'>Obesitas</h2>,
      desc: 'Kelebihan berat badan tingkat ringan',
      pesan: (
        <p>
          Dalam 60% kasus, <span className='text-red-500'>pola makan yang buruk</span> dapat
          <span className='text-red-500'> berisiko</span> Diabetes.
        </p>
      ),
      imageParameter: ParameterObesitas,
    };
  } else if (total > 18.5 && total < 25) {
    hasil = {
      title: <h2 className='text-4xl font-semibold text-green-500'>Normal</h2>,
      desc: 'Berat badan ideal',
      pesan: (
        <p>
          <span className='text-green-500'>Diet yang baik</span> dapat
          <span className='text-green-500'> mempertahankan</span> kesehatan & imun.
        </p>
      ),
      imageParameter: ParameterNormal,
    };
  } else if (total > 17 && total < 18.4) {
    hasil = {
      title: <h2 className='text-4xl font-semibold text-yellow-500'>Kurus</h2>,
      desc: 'Kekurangan berat badan ringan',
      pesan: (
        <p>
          <span className='text-yellow-500'>Tingkatkan Lagi asupan makanan</span> agar bisa
          <span className='text-yellow-500'> mempertahankan</span> kesehatan & imun.
        </p>
      ),
      imageParameter: ParameterKurus,
    };
  } else {
    hasil = {
      title: <h2 className='text-4xl font-semibold text-yellow-500'>Kurus</h2>,
      desc: 'Kekurangan berat badan berat',
      pesan: (
        <p>
          <span className='text-yellow-500'>Tingkatkan Lagi asupan makanan</span> agar bisa
          <span className='text-yellow-500'> mempertahankan</span> kesehatan & imun.
        </p>
      ),
      imageParameter: ParameterKurus,
    };
  }

  return { hasil, total, tinggi, berat, gender };
};

export default BMI;
