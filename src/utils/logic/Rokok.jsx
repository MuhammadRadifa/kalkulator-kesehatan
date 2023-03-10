const Rokok = ({ harga, isiKotakRokok, rokokHarian, tahun }) => {
  const totalBiaya = {
    mingguan: ((rokokHarian * 7) / isiKotakRokok) * harga,
    bulanan: mingguan * 4,
    tahunan: bulanan * 12,
  };

  const result = {
    totalRokok: rokokHarian * 365 * tahun,
    diagnosa: [],
    warna: '',
  };

  if (rokokHarian <= 5) {
    result.diagnosa = [
      'Meski Anda hanya merokok beberapa batang sehari, efek buruk rokok tetap berbahaya bagi kesehatan Anda. Coba kurangi atau hentikan konsumsi rokok untuk menjaga kesehatan Anda.',
      'Kebiasaan merokok beberapa batang sehari masih dapat menyebabkan kerusakan pada kesehatan Anda. Pertimbangkan untuk mengurangi atau menghentikan kebiasaan ini untuk kebaikan Anda sendiri.',
    ];
    result.warna = 'oren';
  } else if (rokokHarian > 5 && rokokHarian <= 10) {
    result.diagnosa = [
      'Jumlah rokok yang Anda konsumsi setiap hari sudah cukup besar untuk meningkatkan risiko penyakit jantung, paru-paru, dan kanker. Pertimbangkan untuk mengurangi konsumsi atau bahkan berhenti merokok.',
      'Merokok 6-10 batang sehari sudah cukup berbahaya bagi kesehatan Anda. Pertimbangkan untuk menghentikan kebiasaan ini sebelum terlambat.',
    ];
    result.warna = 'kuning';
  } else {
    result.diagnosa = [
      'Jumlah rokok yang Anda konsumsi setiap hari sangat berbahaya bagi kesehatan Anda. Risiko terkena penyakit jantung, paru-paru, dan kanker meningkat drastis. Pertimbangkan untuk mengurangi konsumsi atau bahkan berhenti merokok.',
      'Kebiasaan merokok lebih dari 10 batang sehari dapat merusak kesehatan Anda secara serius. Coba untuk berhenti merokok untuk kesehatan jangka panjang Anda.',
    ];
    result.warna = 'merah';
  }
  return { totalBiaya, result };
};

export default Rokok;
