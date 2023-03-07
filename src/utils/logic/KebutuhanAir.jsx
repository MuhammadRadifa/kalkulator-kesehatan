const KebutuhanAir = (berat) => {
  const mili = berat * 30;
  const liter = (berat * 30) / 1000;
  const gelas = Math.round((berat * 30) / 220);
  return { berat, liter, gelas, mili };
};

export default KebutuhanAir;
