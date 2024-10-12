import api from '../services/axiosConfig';

export async function getAnimals() {
  try {
    const response = await api.get('/animals');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}