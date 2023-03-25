// Berikut adalah beberapa contoh RDA untuk beberapa vitamin yang berbeda, berdasarkan usia:

// Vitamin A:

// Anak-anak usia 1-3 tahun: 300 mcg RAE per hari
// Anak-anak usia 4-8 tahun: 400 mcg RAE per hari
// Anak-anak usia 9-13 tahun: 600 mcg RAE per hari
// Laki-laki usia 14 tahun ke atas: 900 mcg RAE per hari
// Perempuan usia 14 tahun ke atas: 700 mcg RAE per hari

// Vitamin C:

// Anak-anak usia 1-3 tahun: 15 mg per hari
// Anak-anak usia 4-8 tahun: 25 mg per hari
// Anak-anak usia 9-13 tahun: 45 mg per hari
// Laki-laki usia 14-18 tahun: 75 mg per hari
// Perempuan usia 14-18 tahun: 65 mg per hari
// Laki-laki usia 19 tahun ke atas: 90 mg per hari
// Perempuan usia 19 tahun ke atas: 75 mg per hari

// Vitamin D:

// Anak-anak usia 1-13 tahun: 15 mcg (600 IU) per hari
// Laki-laki dan perempuan usia 14-70 tahun: 15 mcg (600 IU) per hari
// Laki-laki dan perempuan usia di atas 70 tahun: 20 mcg (800 IU) per hari

// Vitamin E:
// Anak usia 1-3 tahun: 6 mg
// Anak usia 4-8 tahun: 7 mg
// Anak usia 9-13 tahun: 11 mg
// Remaja usia 14-18 tahun (laki-laki): 15 mg
// Remaja usia 14-18 tahun (perempuan): 15 mg
// Orang dewasa (laki-laki): 15 mg
// Orang dewasa (perempuan): 15 mg

// Vitamin K:
// Anak usia 1-3 tahun: 30 mcg
// Anak usia 4-8 tahun: 55 mcg
// Anak usia 9-13 tahun: 60 mcg
// Remaja usia 14-18 tahun (laki-laki): 75 mcg
// Remaja usia 14-18 tahun (perempuan): 75 mcg
// Orang dewasa (laki-laki): 120 mcg
// Orang dewasa (perempuan): 90 mcg

const Vitamin = ({ umur, gender }) => {
  const result = [
    {
      nama: 'Vitamin D',
      satuan: 'mcg',
      color: 'orange-300',
      deskripsi: `${umur > 70 ? '20' : '15'}`,
    },
    { nama: 'Vitamin A', satuan: 'mcg', color: 'yellow-300', deskripsi: '' },
    { nama: 'Vitamin C', satuan: 'mg', color: 'lime-300', deskripsi: '' },
    { nama: 'Vitamin E', satuan: 'mg', color: 'green-300', deskripsi: '' },
    { nama: 'Vitamin K', satuan: 'mcg', color: 'sky-300', deskripsi: '' },
  ];

  let kategori = '';

  if (umur > 0 && umur < 4) {
    result[1].deskripsi = '300';
    result[2].deskripsi = '15';
    result[3].deskripsi = '6';
    result[4].deskripsi = '30';
    kategori = 'Anak usia 1-3 tahun';
  } else if (umur >= 4 && umur <= 8) {
    result[1].deskripsi = '400';
    result[2].deskripsi = '25';
    result[3].deskripsi = '7';
    result[4].deskripsi = '55';
    kategori = 'Anak usia 4-8 tahun';
  } else if (umur > 8 && umur <= 13) {
    result[1].deskripsi = '600';
    result[2].deskripsi = '45';
    result[3].deskripsi = '11';
    result[4].deskripsi = '60';
    kategori = 'Anak usia 9-13 tahun';
  } else if (umur > 13 && umur <= 18) {
    if (gender == 'pria') {
      result[1].deskripsi = '900';
      result[2].deskripsi = '45';
      result[3].deskripsi = '15';
      result[4].deskripsi = '75';
      kategori = 'Remaja usia 14-18 tahun (laki-laki)';
    } else {
      result[1].deskripsi = '700';
      result[2].deskripsi = '65';
      result[3].deskripsi = '15';
      result[4].deskripsi = '75';
      kategori = 'Remaja usia 14-18 tahun (perempuan)';
    }
  } else {
    if (gender == 'pria') {
      result[1].deskripsi = '900';
      result[2].deskripsi = '90';
      result[3].deskripsi = '15';
      result[4].deskripsi = '120';
      kategori = 'Orang dewasa (laki-laki)';
    } else {
      result[1].deskripsi = '700';
      result[2].deskripsi = '75';
      result[3].deskripsi = '15';
      result[4].deskripsi = '90';
      kategori = 'Orang dewasa (perempuan)';
    }
  }
  return { result, kategori };
};

export default Vitamin;
