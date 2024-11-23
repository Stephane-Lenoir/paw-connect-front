import api from './axiosConfig';
import { UserUpdateData } from '../@types/user';

// Route User
export async function getUser() {
  try {
    const token = localStorage.getItem('jwt_token');
    const response = await api.get('profiles/getAll', {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getUserByToken(token: string) {
  try {
    const response = await api.get('profiles/getOne', {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
    return response.data.member;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateUserById(id: string | number, user: UserUpdateData) {
  try {
    const response = await api.put(`profiles/${id}`, user, {
      headers: {
        Authorization: localStorage.getItem('jwt_token'),
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteUserById(id: string | number) {
  try {
    const token = localStorage.getItem('jwt_token');
    const response = await api.delete(`profiles/${id}`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
