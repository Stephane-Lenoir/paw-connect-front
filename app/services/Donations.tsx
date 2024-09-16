import api from './axiosConfig';

export const createDonation = async (donationData) => {
  try {
    const response = await api.post('/donations', donationData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création du don:", error.response?.data || error.message);
    throw error;
  }
};

export const getDonationsByUser = async (userId) => {
  try {
    const response = await api.get(`/donations/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching donations:', error.response?.data || error.message);
    throw error;
  }
};

export const getAllDonations = async () => {
  try {
    const response = await api.get('/donations');
    return response.data;
  } catch (error) {
    console.error('Error fetching all donations:', error.response?.data || error.message);
    throw error;
  }
};

export const updateDonation = async (donationId, updateData) => {
  try {
    const response = await api.put(`/donations/${donationId}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating donation:', error.response?.data || error.message);
    throw error;
  }
};

export const deleteDonation = async (donationId) => {
  try {
    const response = await api.delete(`/donations/${donationId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting donation:', error.response?.data || error.message);
    throw error;
  }
};
