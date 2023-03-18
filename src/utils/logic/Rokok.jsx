const Rokok = ({ harga, isiKotakRokok, rokokHarian, tahun }) => {
  const totalBiaya = {
    mingguan: Math.floor(((rokokHarian * 7) / isiKotakRokok) * harga),
    bulanan: 0,
    tahunan: 0,
  };

  totalBiaya.bulanan = Math.floor(totalBiaya.mingguan * 4);
  totalBiaya.tahunan = Math.floor(totalBiaya.bulanan * 12);

  const result = {
    totalRokok: rokokHarian * 365 * tahun,
    diagnosa: [],
    desc: '',
    tingkatan: '',
  };

  if (rokokHarian <= 5) {
    result.diagnosa = [
      'Meski Anda hanya merokok beberapa batang sehari, efek buruk rokok tetap berbahaya bagi kesehatan Anda. Coba kurangi atau hentikan konsumsi rokok untuk menjaga kesehatan Anda.',
      'Kebiasaan merokok beberapa batang sehari masih dapat menyebabkan kerusakan pada kesehatan Anda. Pertimbangkan untuk mengurangi atau menghentikan kebiasaan ini untuk kebaikan Anda sendiri.',
    ];
    result.desc = 'Untuk perokok ringan (hingga 5 batang per hari)';
    result.tingkatan = 'ringan';
  } else if (rokokHarian > 5 && rokokHarian <= 10) {
    result.diagnosa = [
      'Jumlah rokok yang Anda konsumsi setiap hari sudah cukup besar untuk meningkatkan risiko penyakit jantung, paru-paru, dan kanker. Pertimbangkan untuk mengurangi konsumsi atau bahkan berhenti merokok.',
      'Merokok 6-10 batang sehari sudah cukup berbahaya bagi kesehatan Anda. Pertimbangkan untuk menghentikan kebiasaan ini sebelum terlambat.',
    ];
    result.desc = 'Untuk perokok sedang (6-10 batang per hari)';
    result.tingkatan = 'sedang';
  } else {
    result.diagnosa = [
      'Jumlah rokok yang Anda konsumsi setiap hari sangat berbahaya bagi kesehatan Anda. Risiko terkena penyakit jantung, paru-paru, dan kanker meningkat drastis. Pertimbangkan untuk mengurangi konsumsi atau bahkan berhenti merokok.',
      'Kebiasaan merokok lebih dari 10 batang sehari dapat merusak kesehatan Anda secara serius. Coba untuk berhenti merokok untuk kesehatan jangka panjang Anda.',
    ];
    result.desc = 'Untuk perokok berat (lebih dari 10 batang per hari)';
    result.tingkatan = 'berat';
  }
  return { totalBiaya, result };
};

export default Rokok;
