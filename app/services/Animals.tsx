import api from './axiosConfig';

// Route Animals
export async function getAllAnimals() {
  return api.get('animals');

  // const response = axios.get('http://localhost:3000/api/animals');
  // return response;
}

export async function getAnimalById(id) {
  return api.get(`animals/${id}`);

  // const response = axios.get(`http://localhost:3000/api/animals/${id}`);
  // return response;
}

export async function createAnimal(animal) {
  return api.post('animals', animal);

  // const response = axios.post('http://localhost:3000/api/animals', animal);
  // return response;
}

export async function updateAnimal(id, animal) {
  return api.put(`animals/${id}`, animal);

  // const response = axios.put(`http://localhost:3000/api/animals/${id}`, animal);
  // return response;
}

export async function deleteAnimal(id) {
  return api.delete(`animals/${id}`);

  // const response = axios.delete(`http://localhost:3000/api/animals/${id}`);
  // return response;
}
