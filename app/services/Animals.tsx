import api from './axiosConfig';
import { Animal } from '../@types/animal';

// Animals router
export async function getAllAnimals() {
  try {
    const response = await api.get('animals');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAnimalByUserId(id: string | number) {
  try {
    const response = await api.get(`animals/${id}`, {
      headers: {
        Authorization: localStorage.getItem('jwt_token'),
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createAnimal(animal: Animal) {
  try {
    const response = await api.post('animals', animal, {
      headers: {
        Authorization: localStorage.getItem('jwt_token'),
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateAnimal(id: string | number, animal: Partial<Animal>){
  try {
    const response = await api.put(`animals/${id}`, animal, {
      headers: {
        Authorization: localStorage.getItem('jwt_token'),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteAnimal(id: string | number)  {
  try {
    const response = await api.delete(`animals/${id}`,{
      headers: {
        Authorization: localStorage.getItem('jwt_token'),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
