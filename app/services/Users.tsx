import api from './axiosConfig';



// Route User
export async function getUser() {

  try {
    const response = await api.get("profiles");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateUserById(id, user) {
  try {
    const response = await api.put(`profiles/${id}`, user);
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
>>>>>>> c4b4845 (better way  of the fetch methods)
}
