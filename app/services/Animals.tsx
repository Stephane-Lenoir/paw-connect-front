// Route Animals
import axios from 'axios';

export async function getAllAnimals() {
  const response = axios.get('http://localhost:3000/api/animals');

  return response;
}

export async function getAnimalById(id) {
  const response = axios.get(`http://localhost:3000/api/animals/${id}`);

  return response;
}

export async function createAnimal(animal) {
  const response = axios.post('http://localhost:3000/api/animals', animal);

  return response;
}

export async function updateAnimal(id, animal) {
  const response = axios.put(`http://localhost:3000/api/animals/${id}`, animal);

  return response;
}

export async function deleteAnimal(id) {
  const response = axios.delete(`http://localhost:3000/api/animals/${id}`);

  return response;
}
