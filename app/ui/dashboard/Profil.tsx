import { useEffect, useState } from 'react';
import { getUserById, updateUserById } from '../../services/Users';
import Menu from './Menu';
import { useAuth } from '../../context/authContext';
import Loader from '../loader';
import { useToast } from '../../context/toastContext';

export default function Profil() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);

  const { userConnected, setUserConnected } = useAuth();
  const { showToastMessage } = useToast();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const token = localStorage.getItem("jwt_token");

  //     if (token) {
  //       const [, payload] = token.split(".");
  //       const decodedPayload = JSON.parse(atob(payload));
  //       const userId = decodedPayload.id;

  //       try {
  //         setLoading(true);
  //         const fetchedUser = await getUserById(userId);
  //         setUser(fetchedUser);
  //         setLoading(false);
  //       } catch (error) {
  //         console.error(error);
  //         setError("Failed to fetch user. Please try again later.");
  //         setLoading(false);
  //       }
  //     } else {
  //       setError("No JWT token found. Please log in.");
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  const validateForm = (formData) => {
    const requiredFields = ['name', 'firstname'];
    const missingFields = requiredFields.filter((field) => !formData.get(field));

    if (missingFields.length > 0) {
      showToastMessage(
        null,
        false,
        `Les champs suivants sont manquants : ${missingFields.join(', ')}`,
      );
      return false;
    }

    return true;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (!validateForm(formData)) {
      return;
    }

    const updatedUser = {
      name: formData.get('name'),
      firstname: formData.get('firstname'),
    };

    try {
      setUserConnected(updatedUser);
      await updateUserById(userConnected.id, updatedUser);
      setEditing(false);
      showToastMessage(9, true); // Index du message à afficher, succès
    } catch (error) {
      console.error(error);
      setError('Failed to update user. Please try again later.');
      setLoading(true);
      showToastMessage(9, false); // Index du message d'erreur, erreur
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full min-h-screen p-8">
      <Menu />

      <h1 className="text-3xl font-bold text-text-color mb-6 text-center">Votre profil</h1>
      <form
        onSubmit={handleSave}
        className="bg-card-bg p-6 rounded-lg shadow-md w-full max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-text-color text-xl font-bold mb-2">
            Prénom :
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            defaultValue={userConnected.firstname}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
            disabled={!editing}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-text-color text-xl font-bold mb-2">
            Nom :
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={userConnected.name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
            disabled={!editing}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-text-color text-xl font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={userConnected.email}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
            readOnly
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="bg-secondary-color hover:bg-primary-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Modifier
          </button>
          {editing && (
            <>
              <button
                type="submit"
                className="bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sauvegarder les modifications
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="bg-secondary-color hover:bg-primary-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Annuler
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
