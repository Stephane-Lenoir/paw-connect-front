import api from './axiosConfig';
import { SearchQuery } from '../@types/search';
// Route Search

export async function searchAnimal(query: SearchQuery) {
  try {
    const response = await api.post('search', query);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
