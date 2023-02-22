const BMI = (berat, tinggi) => {
  let status = '';
  tinggi = tinggi / 100;
  const total = Math.floor(Math.pow(tinggi, 2) / berat);

  if (total > 27) {
    status = 'Gemuk, kelebihan berat badan tingkat berat';
  } else if (total > 25.1 || total < 27) {
    status = 'Gemuk, kelebihan berat badan tingkat ringan';
  } else if (total > 18.5 || total < 25) {
    status = 'Normal';
  } else if (total > 17 || total < 18.5) {
    status = 'Kurus, kekurangan berat badan ringan';
  } else {
    status = 'Kurus, kekurangan berat badan berat';
  }

  return { status, total, bmi: total, tinggi, berat };
};

export default BMI;
