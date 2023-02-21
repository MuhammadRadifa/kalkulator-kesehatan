const BasalMetabolicRate = (gender, umur, tinggi, berat) => {
  return gender == 'pria' ? 10 * berat + 6.25 * tinggi - 5 * umur + 5 : 10 * berat + 6.25 * tinggi - 5 * umur - 161;
};

const Calories = ({ gender, umur, tinggi, berat, aktivitas, target }) => {
  const TDEE = {
    rendah: 1.2,
    sedang: 1.55,
    aktif: 1.9,
  };

  const goalCombination = {
    beratBadan: {
      karbohidrat: 20,
      protein: 40,
      lemak: 40,
    },
    masaOtot: {
      karbohidrat: 45,
      protein: 40,
      lemak: 15,
    },
    atlit: {
      karbohidrat: 50,
      protein: 30,
      lemak: 20,
    },
  };

  const BMR = BasalMetabolicRate(gender, umur, tinggi, berat);
  const totalCalorie = BMR * TDEE[aktivitas];
  const konsumsi = goalCombination[target];
  const Makro = {
    karbohidrat: Math.floor((totalCalorie * (konsumsi.karbohidrat / 100)) / 4),
    protein: Math.floor((totalCalorie * (konsumsi.protein / 100)) / 4),
    lemak: Math.floor((totalCalorie * (konsumsi.lemak / 100)) / 9),
  };

  return { totalCalorie, Makro };
};

export default Calories;
