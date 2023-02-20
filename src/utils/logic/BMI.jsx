const BMI = (berat, tinggi) => {
  let status = '';
  const total = Math.pow(tinggi, 2) / berat;
  if (total) {
  }
  return { status, bmi: total, tinggi, berat };
};

export default BMI;
