import axios from 'axios';

export async function getAnimals() {
  const response = axios.get('http://localhost:3000/api/animals');

  return response;
}

/*import axios from 'axios';

export async function getAnimals() {
  try {
    const response = await axios.get('http://localhost:3000/api/animals');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des animaux:', error);
    throw error;
  }
}*/
