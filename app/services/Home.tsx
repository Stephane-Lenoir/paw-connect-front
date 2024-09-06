import axios from 'axios';

// Route Home
export async function getAnimals() {
  const response = axios.get('http://localhost:3000/api/');

  return response;
}
