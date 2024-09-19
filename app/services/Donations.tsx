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

export const checkSessionStatus = async (sessionId: string): Promise<DonationCheckResponse> => {
  if (checkingSession) {
    
    throw new Error('Session check already in progress');
  }
  checkingSession = true;
  try {
    const response = await api.get<DonationCheckResponse>(`/donations/check-session/${sessionId}`);
    return response.data;
  } catch (error) {
    console.error('Error checking session status:', error);
    throw error;
  } finally {
    checkingSession = false;
  }
};