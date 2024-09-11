import axios from './axiosConfig';

// Route Associations
export async function getAllAssociations() {
  try {
    const response = await axios.get('associations');
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getOneAssociation = async (id: string) => {
  try {
    const response = await axios.get(`associations/${id}`);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching association:", error);
    throw error;
  }
};