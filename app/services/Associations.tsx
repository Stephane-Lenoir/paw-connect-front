import api from './axiosConfig';

// Route Associations
export async function getAllAssociations() {
  try {
    const response = await api.get('associations');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAssociationById(id) {
  try {
    const response = await api.get(`associations/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
