import data from '../../data/quotes';

const generateQuotes = () => {
  const index = Math.floor(Math.random() * data.length);
  return data[index];
};

export default generateQuotes;
