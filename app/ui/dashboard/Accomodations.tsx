import Menu from './Menu';
import { getAllRequests } from '../../services/Request';
import Loader from '../loader';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';

export default function Accomodations() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userConnected } = useAuth();

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

  // // // Log des informations de l'utilisateur connecté
  // console.log('User Connected:', userConnected);

  // // // Log des requêtes récupérées
  // console.log('Requests:', requests);

  // Filtrer les requêtes en fonction du rôle de l'utilisateur
  const filteredRequests = requests.filter((request) => {
    if (userConnected.role_id === 1) {
      // Admin voit toutes les requêtes
      return true;
    }
    if (userConnected.role_id === 2) {
      // Membre voit les requêtes qu'il a faites
      return request.user_id === userConnected.id;
    }
    if (userConnected.role_id === 3) {
      // Association voit les requêtes qu'elle a reçues
      return request.user_id === userConnected.id;
    }
    return false;
  });

  return (
    <div className="w-full min-h-screen p-8">
      <Menu />

      <h1 className="text-3xl font-bold text-text-color mb-6 text-center">Requêtes</h1>

      {filteredRequests.map((request) => (
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

            {(userConnected.role_id === 1 || userConnected.role_id === 3) && (
              <div className="flex flex-wrap justify-between gap-2 mt-6 ">
                <button
                  type="button"
                  className="bg-secondary-color text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/3 block mx-auto text-base font-caveat"
                >
                  {' '}
                  Accepter{' '}
                </button>
                <button
                  type="button"
                  className="bg-secondary-color text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/3 block mx-auto text-base font-caveat"
                >
                  {' '}
                  Refuser{' '}
                </button>

                {userConnected.role_id === 1 && (
                  <button
                    type="button"
                    className="bg-secondary-color text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/3 block mx-auto text-base font-caveat"
                  >
                    {' '}
                    Supprimer{' '}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
