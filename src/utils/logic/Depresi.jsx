import { DepresiBerat, DepresiRingan, DepresiSangatBerat, DepresiSedang, TidakDepresi } from '../../assets';

const Depresi = ({ state1, state2, state3, state4, state5, state6, state7 }) => {
  const skor = state1 + state2 + state3 + state4 + state5 + state6 + state7;
  let hasil = {};

  if (skor >= 0 && skor <= 4) {
    hasil = {
      diagnosa: 'Tidak Depresi',
      desc: 'Skor ini menunjukkan bahwa seseorang tidak mengalami gejala depresi yang signifikan. Namun, hal ini tidak menjamin bahwa seseorang tidak memiliki masalah kesehatan mental lainnya.',
      image: TidakDepresi,
    };
  } else if (skor > 4 && skor <= 9) {
    hasil = {
      diagnosa: 'Depresi Ringan',
      desc: 'Skor ini menunjukkan bahwa seseorang mengalami gejala depresi ringan. Seseorang mungkin merasa sedih, tidak bersemangat, atau gelisah dalam beberapa situasi, tetapi masih mampu melakukan aktivitas sehari-hari.',
      image: DepresiRingan,
    };
  } else if (skor > 9 && skor <= 14) {
    hasil = {
      diagnosa: 'Depresi Sedang',
      desc: 'Skor ini menunjukkan bahwa seseorang mengalami gejala depresi yang lebih signifikan. Seseorang mungkin merasa sangat sedih, kehilangan minat pada aktivitas yang biasanya disukai, dan mengalami masalah tidur dan nafsu makan. Pada tingkat ini, gejala depresi mungkin mempengaruhi kualitas hidup seseorang.',
      image: DepresiSedang,
    };
  } else if (skor > 14 && skor <= 19) {
    hasil = {
      diagnosa: 'Depresi Berat',
      desc: 'Skor ini menunjukkan bahwa seseorang mengalami gejala depresi yang sangat signifikan. Seseorang mungkin merasa sangat sedih, putus asa, dan tidak mampu menikmati aktivitas sehari-hari. Gejala depresi pada tingkat ini bisa memengaruhi kemampuan seseorang untuk berfungsi secara normal dalam kehidupan sehari-hari.',
      image: DepresiBerat,
    };
  } else {
    hasil = {
      diagnosa: 'Depresi Sangat Berat',
      desc: 'Skor ini menunjukkan bahwa seseorang mengalami gejala depresi yang sangat berat. Seseorang mungkin merasa sangat sedih, putus asa, dan mungkin memiliki pemikiran untuk melakukan tindakan merugikan pada diri sendiri atau bahkan bunuh diri. Seseorang pada tingkat ini harus segera mencari bantuan medis profesional.',
      image: DepresiSangatBerat,
    };
  }

  return { skor, hasil };
};

export default Depresi;
