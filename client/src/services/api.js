import axios from 'axios';

const API_URL = 'http://localhost:5000/api/exercises';

export const getExerciseData = (name, timeframe) => {
  return axios.get(`${API_URL}/${name}?timeframe=${timeframe}`);
};

export const addExerciseData = (name, data) => {
  return axios.post(`${API_URL}/${name}`, data);
};
