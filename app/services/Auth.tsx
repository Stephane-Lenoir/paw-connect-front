import api from "./axiosConfig";
import { LoginCredentials, RegisterData, AuthResponse } from '../@types/auth';

// Route Auth
export async function login(user: LoginCredentials): Promise<AuthResponse> {
  try {
    const response = await api.post("auth/login", user);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function register(user: RegisterData): Promise<AuthResponse> {
  try {
    const response = await api.post("auth/register", user);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
