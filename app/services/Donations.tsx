import api from './axiosConfig';

let lastSessionId = null;

export const createDonation = async (donationData) => {
  try {
    const response = await api.post('/donations', donationData);
    return response.data;
  } catch (error) {
    console.error('Error creating donation:', error.response?.data || error.message);
    throw error;
  }
};

export const getDonationsByUser = async () => {
  console.log("Fetching donations for logged-in user");
  try {
    const response = await api.get(`/donations/user/me`);
    console.log("Donations response:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching donations:', error.response?.data || error.message);
    console.error('Full error object:', error);
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

export const createStripeSession = async (donationData: {
  amount: number;
  userId: string;
  donorName: string;
  donorEmail: string;
  message: string;
  associationId: string;
}) => {
  try {
    const response = await api.post('/donations/create-stripe-session', donationData);
    if (response.data.id === lastSessionId) {
      console.warn('Duplicate session creation detected');
      return response.data;
    }
    lastSessionId = response.data.id;
    return response.data;
  } catch (error) {
    console.error('Error creating Stripe session:', error.response?.data || error.message);
    throw error;
  }
};

let checkingSession = false;

export const checkSessionStatus = async (sessionId: string) => {
  if (checkingSession) {
    console.log('Already checking session status');
    return;
  }
  checkingSession = true;
  try {
    const response = await api.get(`/donations/check-session/${sessionId}`);
    return response.data;
  } catch (error) {
    console.error('Error checking session status:', error);
    throw error;
  } finally {
    checkingSession = false;
  }
};