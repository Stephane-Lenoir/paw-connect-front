import api from './axiosConfig';

export const createDonation = async (donationData) => {
  console.log("createDonation called with data:", donationData);
  try {
    console.log("Envoi de la requête au serveur");
    const response = await api.post('/donations', donationData);
    console.log("Réponse reçue du serveur:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création du don:", error.response?.data || error.message);
    console.error('Full error object:', error);
    throw error;
  }
};

export const getDonationsByUser = async (userId) => {
  console.log("getDonationsByUser called for userId:", userId);
  try {
    const response = await api.get(`/donations/user/${userId}`);
    console.log("getDonationsByUser response:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching donations:', error.response?.data || error.message);
    throw error;
  }
};

export const getAllDonations = async () => {
  console.log("getAllDonations called");
  try {
    const response = await api.get('/donations');
    console.log("getAllDonations response:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching all donations:', error.response?.data || error.message);
    throw error;
  }
};

export const updateDonation = async (donationId, updateData) => {
  console.log(`updateDonation called for donationId: ${donationId}`, updateData);
  try {
    const response = await api.put(`/donations/${donationId}`, updateData);
    console.log("updateDonation response:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating donation:', error.response?.data || error.message);
    throw error;
  }
};

export const deleteDonation = async (donationId) => {
  console.log(`deleteDonation called for donationId: ${donationId}`);
  try {
    const response = await api.delete(`/donations/${donationId}`);
    console.log("deleteDonation response:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting donation:', error.response?.data || error.message);
    throw error;
  }
};