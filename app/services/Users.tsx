import api from './axiosConfig';

// Route User
export async function getUser() {
  try {
    const response = await api.get('profiles');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getUserById(userId) {
  try {
    const response = await api.get(`profiles/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateUserById(id, user) {
  try {
    const response = await api.put(`profiles/${id}`, user, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getUserByRole() {
  try {
    const response = await api.get('profiles/roles');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteUserById(id) {
  try {
    const response = await api.delete(`/profiles/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
