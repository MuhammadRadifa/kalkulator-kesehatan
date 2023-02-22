const BMI = (berat, tinggi) => {
  let status = '';
  tinggi = tinggi / 100;
  const total = parseFloat(berat / (tinggi * tinggi)).toFixed(1);

  if (total > 27) {
    status = 'Gemuk, kelebihan berat badan tingkat berat';
  } else if (total > 25.1 && total < 27) {
    status = 'Gemuk, kelebihan berat badan tingkat ringan';
  } else if (total > 18.5 && total < 25) {
    status = 'Normal';
  } else if (total > 17 && total < 18.5) {
    status = 'Kurus, kekurangan berat badan ringan';
  } else {
    status = 'Kurus, kekurangan berat badan berat';
  }

  return { status, total, tinggi, berat };
};

export default BMI;
