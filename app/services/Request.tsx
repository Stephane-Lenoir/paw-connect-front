import api from './axiosConfig';
import { Request } from '../@types/request';

// Route Requests
export async function getAllRequests() {
  try {
    const response = await api.get('requests', {
      headers: {
        Authorization: localStorage.getItem('jwt_token'),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getRequestById(id: string | number) {
  try {
    const response = await api.get(`requests/${id}`,{
      headers: {
        Authorization: localStorage.getItem('jwt_token'),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createRequest(data: Partial<Request>) {
  try {
    const token = localStorage.getItem('jwt_token');
    const response = await api.post('requests', data, {
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

export async function updateRequest(id: string | number, request: Partial<Request>) {
  try {
    const response = await api.put(`requests/${id}`, request, {
      headers: {
        Authorization: localStorage.getItem('jwt_token'),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteRequest(id: string | number) {
  try {
    const response = await api.delete(`requests/${id}`, {
      headers: {
        Authorization: localStorage.getItem('jwt_token'),
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
