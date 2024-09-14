import api from './axiosConfig';

const getAuthToken = () => {
  return localStorage.getItem('jwt_token');
};

export const createDonation = async (donationData) => {
  console.log("createDonation called with data:", donationData);
  try {
    const token = getAuthToken();
    if (!token) {
      throw new Error("Utilisateur non authentifié");
    }
    console.log("Sending POST request to /donations with token");
    const response = await api.post('/donations', donationData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log("Donation API response:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating donation:', error.response?.data || error.message);
    console.error('Full error object:', error);
    throw error;
  }
};

export const getDonationsByUser = async (userId) => {
  console.log("getDonationsByUser called for userId:", userId);
  try {
    const token = getAuthToken();
    if (!token) {
      throw new Error("Utilisateur non authentifié");
    }
    const response = await api.get(`/donations/user/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
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
    const token = getAuthToken();
    if (!token) {
      throw new Error("Utilisateur non authentifié");
    }
    const response = await api.get('/donations', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
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
    const token = getAuthToken();
    if (!token) {
      throw new Error("Utilisateur non authentifié");
    }
    const response = await api.put(`/donations/${donationId}`, updateData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
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
    const token = getAuthToken();
    if (!token) {
      throw new Error("Utilisateur non authentifié");
    }
    const response = await api.delete(`/donations/${donationId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log("deleteDonation response:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting donation:', error.response?.data || error.message);
    throw error;
  }
};