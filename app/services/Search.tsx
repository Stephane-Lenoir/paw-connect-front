import api from './axiosConfig';

const BASE_URL = 'http://localhost:3000/api';

// Route Search

export async function searchAnimal(query) {
  try {
    const response = await api.post("/search", query);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
>>>>>>> c4b4845 (better way  of the fetch methods)
}
