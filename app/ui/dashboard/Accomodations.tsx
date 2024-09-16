import Menu from './Menu';
import { deleteRequest, getAllRequests, updateRequest } from '../../services/Request';
import Loader from '../loader';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useToast } from '../../context/toastContext';
<<<<<<< HEAD
import { useAnimal } from '../../context/animalContext';
=======
>>>>>>> d2d26d2 (add toast on animals and dashboards)

export default function Accomodations() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const { userConnected } = useAuth();
  const { showToastMessage } = useToast();
<<<<<<< HEAD
  const { animalData } = useAnimal(); // Utilisez le contexte pour obtenir les données des animaux
=======
>>>>>>> d2d26d2 (add toast on animals and dashboards)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllRequests();
        setRequests(data);
        setLoading(false);

        // Vérifiez les nouvelles demandes et ajoutez-les aux notifications
        const newRequests = data.filter((request) => request.status === 'En attente');
        setNotifications(newRequests);
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
      const associationAnimals = animalData.filter(
        (animal) => animal.association_id === userConnected.association_id,
      );
      const associationAnimalIds = associationAnimals.map((animal) => animal.id);
      return associationAnimalIds.includes(request.animal_id);
    }
    return false;
  });

  const handleAccept = async (requestId) => {
    try {
      await updateRequest(requestId, { status: 'Acceptée' });
      setRequests(
        requests.map((request) =>
          request.id === requestId ? { ...request, status: 'Acceptée' } : request,
        ),
      );
<<<<<<< HEAD
      setNotifications(notifications.filter((notification) => notification.id !== requestId));
=======
>>>>>>> d2d26d2 (add toast on animals and dashboards)
      showToastMessage(10, true); // Index du message de succès d'acceptation
    } catch (error) {
      console.error(error);
      showToastMessage(10, false); // Index du message d'erreur d'acceptation
    }
  };

  const handleRefused = async (requestId) => {
    try {
      await updateRequest(requestId, { status: 'Refusée' });
      setRequests(
        requests.map((request) =>
          request.id === requestId ? { ...request, status: 'Refusée' } : request,
        ),
      );
<<<<<<< HEAD
      setNotifications(notifications.filter((notification) => notification.id !== requestId));
=======
>>>>>>> d2d26d2 (add toast on animals and dashboards)
      showToastMessage(10, true); // Index du message de succès de refus
    } catch (error) {
      console.error(error);
      showToastMessage(10, false); // Index du message d'erreur de refus
    }
  };

  const handleDelete = async (requestId) => {
    const isConfirmed = confirm('Êtes-vous sûr de vouloir supprimer cette requête ?');
    if (isConfirmed) {
      try {
        await deleteRequest(requestId);
        setRequests(requests.filter((request) => request.id !== requestId));
<<<<<<< HEAD
        setNotifications(notifications.filter((notification) => notification.id !== requestId));
        showToastMessage(11, true); // Index du message de succès de suppression
      } catch (error) {
        console.error(error);
        showToastMessage(11, false); // Index du message d'erreur de suppression
=======
        showToastMessage(10, true); // Index du message de succès de suppression
      } catch (error) {
        console.error(error);
        showToastMessage(10, false); // Index du message d'erreur de suppression
>>>>>>> d2d26d2 (add toast on animals and dashboards)
      }
    }
  };

  return (
    <div className="w-full min-h-screen p-8">
      <Menu />

      <h1 className="text-3xl font-bold text-text-color mb-6 text-center">
        Demande(s) d'hébergement
      </h1>

      {notifications.length > 0 && (
        <div className="mb-4 bg-green-300 text-gray-800 p-4 text-xl font-bold rounded-lg shadow-md">
          Vous avez <span className="text-red-600">{notifications.length}</span> nouvelle(s)
          demande(s) d'hébergement en attente.
        </div>
      )}

      {filteredRequests.map(
        (request) => (
          console.log(request.user.name),
          (
            <div key={request.id}>
              <div className="mb-4 bg-card-bg p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
                <p className="shadow appearance-none bg-background-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline">
                  {' '}
                  Identification utilisateur : {request.user.name}
                </p>
                <p className="shadow appearance-none bg-background-color border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline">
                  {' '}
                  Identification animal : {request.animal.name}
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
                      onClick={() => handleAccept(request.id)}
                    >
                      Accepter
                    </button>
                    <button
                      type="button"
                      className="bg-secondary-color text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/3 block mx-auto text-base font-caveat"
                      onClick={() => handleRefused(request.id)}
                    >
                      Refuser
                    </button>

                    {userConnected.role_id === 1 && (
                      <button
                        type="button"
                        className="bg-secondary-color text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/3 block mx-auto text-base font-caveat"
                        onClick={() => handleDelete(request.id)}
                      >
                        Supprimer
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )
        ),
      )}
    </div>
  );
}
