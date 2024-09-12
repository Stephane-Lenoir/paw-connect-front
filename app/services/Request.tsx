import api from './axiosConfig';

// Route Requests
export async function getAllRequests() {
  try {
    const response = await api.get('requests');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getRequestById(id) {
  try {
    const response = await api.get(`requests/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createRequest(data) {
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

export async function updateRequest(id, request) {
  try {
    const response = await api.put(`requests/${id}`, request);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteRequest(id) {
  try {
    const response = await axios.delete(`requests/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
