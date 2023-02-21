const BMI = (berat, tinggi) => {
  let status = '';
  const total = Math.pow(tinggi, 2) / berat;

  if (total > 27) {
    status = 'Gemuk, kelebihan berat badan tingkat berat';
  } else if (total > 25.1) {
    status = 'Gemuk, kelebihan berat badan tingkat ringan';
  } else if (total > 18.5) {
    status = 'Normal';
  } else if (total > 17) {
    status = 'Kurus, kekurangan berat badan ringan';
  } else {
    status = 'Kurus, kekurangan berat badan berat';
  }
  return { status, bmi: total, tinggi, berat };
};

export default BMI;
