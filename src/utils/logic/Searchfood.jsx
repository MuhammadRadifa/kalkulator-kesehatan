import axios from 'axios';

export const fetchdataFoods = async (food) => {
  const dataAPI = await axios.get(`${import.meta.env.VITE_API_NUTRISI}ingr=${food}&nutrition-type=logging`);
  return dataAPI.data;
};
export const searchFoods = async (food, limit = 10) => {
  const dataAPI = await axios.get(`${import.meta.env.VITE_API_FOOD}q=${food}&limit=${limit}`);
  return dataAPI;
};

export const manageData = async (event) => {
  const data = []; //state
  event.target.checked ? data.push(event.target.value) : data.pop(event.target.value);
};

export const onSubmit = async (event) => {
  event.preventDefault();
  const foods = []; //state
  const data = foods.map(async (e) => {
    const food = await fetchdataFoods(e);
    return food;
  });
  localStorage.setItem('data', JSON.stringify(data));
};

export const getData = () => {
  return JSON.parse(localStorage.getItem('data'));
};
