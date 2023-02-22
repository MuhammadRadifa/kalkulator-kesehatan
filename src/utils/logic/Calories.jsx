import { PieAtlit, PieBeratBadan, PieMasaOtot } from '../../assets';

const BasalMetabolicRate = (gender, umur, tinggi, berat) => {
  return gender == 'pria' ? 10 * berat + 6.25 * tinggi - 5 * umur + 5 : 10 * berat + 6.25 * tinggi - 5 * umur - 161;
};

const Calories = ({ gender, umur, tinggi, berat, aktivitas, target }) => {
  const TDEE = {
    rendah: 1.2,
    sedang: 1.55,
    tinggi: 1.9,
  };

  const goalCombination = {
    beratBadan: {
      karbohidrat: 20,
      protein: 40,
      lemak: 40,
      diagram: PieBeratBadan,
      desc: 'Formula yang kami gunakan untuk menurunkan berat badan melibatkan penggunaan rentang rasio makro yang sesuai, yaitu rasio antara 20% karbohidrat, 40% protein, dan 40% lemak yang dikonsumsi.',
    },
    masaOtot: {
      karbohidrat: 45,
      protein: 40,
      lemak: 15,
      diagram: PieMasaOtot,
      desc: 'Formula yang kami gunakan untuk meningkatkan massa otot melibatkan penggunaan rentang rasio makro yang sesuai, yaitu rasio antara 45% karbohidrat, 40% protein, dan 15% lemak yang dikonsumsi.',
    },
    atlit: {
      karbohidrat: 50,
      protein: 30,
      lemak: 20,
      diagram: PieAtlit,
      desc: 'Formula yang kami gunakan untuk aktivitas tinggi melibatkan penggunaan rentang rasio makro yang sesuai, yaitu rasio antara 50% karbohidrat, 30% protein, dan 20% lemak yang dikonsumsi.',
    },
  };

  const BMR = BasalMetabolicRate(gender, umur, tinggi, berat);
  const totalCalorie = parseInt(BMR * TDEE[aktivitas]);
  const konsumsi = goalCombination[target];
  const formula = {
    diagram: konsumsi.diagram,
    desc: konsumsi.desc,
  };
  const Makro = {
    karbohidrat: Math.floor((totalCalorie * (konsumsi.karbohidrat / 100)) / 4),
    protein: Math.floor((totalCalorie * (konsumsi.protein / 100)) / 4),
    lemak: Math.floor((totalCalorie * (konsumsi.lemak / 100)) / 9),
  };

  return { totalCalorie, Makro, formula };
};

export default Calories;
