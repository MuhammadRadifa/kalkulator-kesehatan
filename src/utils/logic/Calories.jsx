const BasalMetabolicRate = (gender, umur, tinggi, berat) => {
  return gender == 'pria' ? 10 * berat + 6.25 * tinggi - 5 * umur + 5 : 10 * berat + 6.25 * tinggi - 5 * umur - 161;
};

const Calories = (gender, umur, tinggi, berat, aktivitas, target) => {
  const TDEE = {
    rendah: 1.2,
    sedang: 1.55,
    aktif: 1.9,
  };
  const goalCombination = {
    beratBadan: {
      karbohidrat: 0,
      protein: 0,
      lemak: 0,
    },
    masaOtot: {
      karbohidrat: 0,
      protein: 0,
      lemak: 0,
    },
    tinggi: {
      karbohidrat: 0,
      protein: 0,
      lemak: 0,
    },
  };
  const BMR = BasalMetabolicRate(gender, umur, tinggi, berat);
  const totalCalorie = BMR * TDEE[aktivitas];
  const konsumsi = goalCombination[target];

  return { totalCalorie, konsumsi };
};

export default Calories;
