import axios from 'axios';
import api from './axiosConfig';
import { Donation, StripeSessionData, DonationCheckResponse } from '../@types/donation';

let lastSessionId: string | null = null;

export const createDonation = async (donationData: Donation): Promise<Donation> => {
  try {
    const response = await api.post<Donation>('/donations', donationData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
    console.error('Error creating donation:', error.response?.data || error.message);
    throw error;
  }
};

export const getDonationsByUser = async (): Promise<Donation[]> => {
  try {
    const response = await api.get<Donation[]>(`/donations/user/me`);
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
    console.error('Error fetching donations:', error.response?.data || error.message);
    console.error('Full error object:', error);
    throw error;
  }
};

export const getAllDonations = async (): Promise<Donation[]> => {
  try {
    const response = await api.get<Donation[]>('/donations');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
    console.error('Error fetching all donations:', error.response?.data || error.message);
    throw error;
  }
};

export const createStripeSession = async (donationData: StripeSessionData) => {
  try {
    const response = await api.post('/donations/create-stripe-session', donationData);
    if (response.data.id === lastSessionId) {
      
      return response.data;
    }
    lastSessionId = response.data.id;
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error))
    console.error('Error creating Stripe session:', error.response?.data || error.message);
    throw error;
  }
};

let checkingSession = false;

const pendingChecks = new Map();

export const checkSessionStatus = async (sessionId: string): Promise<DonationCheckResponse> => {
  // Si une vérification est déjà en cours pour cette session, retourner la promesse existante
  if (pendingChecks.has(sessionId)) {
    return pendingChecks.get(sessionId);
  }

  // Créer une nouvelle promesse pour cette vérification
  const checkPromise = new Promise<DonationCheckResponse>(async (resolve, reject) => {
    try {
      const response = await api.get<DonationCheckResponse>(`/donations/check-session/${sessionId}`);
      resolve(response.data);
    } catch (error) {
      reject(error);
    } finally {
      // Supprimer cette session de la map après résolution
      setTimeout(() => pendingChecks.delete(sessionId), 100);
    }
  });

  // Stocker la promesse dans la map
  pendingChecks.set(sessionId, checkPromise);
  return checkPromise;
};