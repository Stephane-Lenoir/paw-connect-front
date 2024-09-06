import axios from 'axios';

// Route Search

export async function searchAnimal() {
  const response = axios.post('http://localhost:3000/api/search');

  return response;
}
