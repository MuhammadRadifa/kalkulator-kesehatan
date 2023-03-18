const Vitamin = ({ berat, tinggi, umur }) => {
  const vitD = Math.round(berat * 22.5 + 1000 * 4 + umur * 20);
  const vitA = Math.round(umur * 200 + berat * 4);
  const vitC = Math.round(umur * 15 + tinggi * 6.25 - berat * 5 + 80);
  const vitE = Math.round(umur * 0.6 + tinggi * 0.24 - berat * 0.46 + 3);
  const vitK = Math.round(umur * 1 + tinggi * 0.01 - berat * 0.02);

  const result = [
    { nama: 'Vitamin D', vitamin: vitD, satuan: 'IU', color: 'orange-300' },
    { nama: 'Vitamin A', vitamin: vitA, satuan: 'RE', color: 'yellow-300' },
    { nama: 'Vitamin C', vitamin: vitC, satuan: 'mg', color: 'lime-300' },
    { nama: 'Vitamin E', vitamin: vitE, satuan: 'mg', color: 'green-300' },
    { nama: 'Vitamin K', vitamin: vitK, satuan: 'μg', color: 'sky-300' },
  ];

  return result;
};

export default Vitamin;
