import Menu from './Menu';
import { getAllRequests } from '../../services/Request';
import Loader from '../loader';
import { useEffect, useState } from 'react';

export default function Accomodations() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllRequests();
        setRequests(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch requests. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  console.log(requests);

  return (
    <div className="w-full min-h-screen p-8">
      <Menu />

      <h1 className="text-3xl font-bold text-text-color mb-6 text-center">Requêtes</h1>

      {requests.map((request) => (
        <div key={request.id}>
          <div className="mb-4 bg-card-bg p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
            <p className="shadow appearance-none bg-background-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline">
              {' '}
              Identification utilisateur : {request.user_id}
            </p>
            <p className="shadow appearance-none bg-background-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline">
              {' '}
              Identification animal : {request.animal_id}
            </p>
            <p className="shadow appearance-none bg-background-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline">
              {' '}
              Date : {request.date}
            </p>
            <p className="shadow appearance-none bg-background-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline">
              {' '}
              Status : {request.status}{' '}
            </p>
          </div>
        </div>
      ))}

      {/* <div className="flex justify-between">
          <button
            type="button"
            className="bg-secondary-color hover:bg-primary-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Modifier
          </button>

          <>
            <button
              type="submit"
              className="bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sauvegarder les modifications
            </button>
            <button
              type="button"
              className="bg-secondary-color hover:bg-primary-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Annuler
            </button>
          </>
        </div> */}
    </div>
  );
}
