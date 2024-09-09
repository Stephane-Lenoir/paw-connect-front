import api from './axiosConfig';

// Route Animals
export async function getAllAnimals() {
  try {
    const response = await api.get('animals');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAnimalById(id) {
  try {
    const response = await api.get(`animals/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createAnimal(animal) {
  try {
    const response = await api.post('animals', animal, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateAnimal(id, animal) {
  try {
    const response = await api.put(`animals/${id}`, animal);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteAnimal(id) {
  try {
    const response = await api.delete(`animals/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
