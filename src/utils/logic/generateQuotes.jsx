import data from '../../data/quotes';

const generateQuotes = () => {
  const index = Math.floor(Math.random() * data.length - 1);
  return data[index];
};

export default generateQuotes;
