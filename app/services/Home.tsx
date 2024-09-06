import api from './axiosConfig';

// Route Home
export async function getAnimals() {
  return api.get('/');

  // const response = axios.get('http://localhost:3000/api/');
  // return response;
}
