import api from './axiosConfig';

// Route Search

export async function searchAnimal() {
  return api.get('search');

  //   const response = axios.post('http://localhost:3000/api/search');
  //   return response;
}
