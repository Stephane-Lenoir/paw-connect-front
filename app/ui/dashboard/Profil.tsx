import { useState } from 'react';
import { updateUserById } from '../../services/Users';
import Menu from './Menu';
import { useAuth } from '../../context/authContext';
import Loader from '../loader';
import { useToast } from '../../context/toastContext';
import { ToastContextType } from '../../@types/toast';
import { AuthContextType } from '../../@types/auth';
import { UserUpdateData } from '../../@types/user';

export default function Profil() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState<boolean>(false);

  const { userConnected, setUserConnected } = useAuth() as AuthContextType;
  const { showToastMessage } = useToast() as ToastContextType;

  const validateForm = (formData: FormData) => {
    const requiredFields = ['name', 'firstname'];
    const missingFields = requiredFields.filter((field) => !formData.get(field));

    if (missingFields.length > 0) {
      showToastMessage(
        0,
        false,
        `Les champs suivants sont manquants : ${missingFields.join(', ')}`,
      );
      return false;
    }

    return true;
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userConnected) return;
    
    const formData = new FormData(e.currentTarget);
 
    if (!validateForm(formData)) {
      return;
    }
 
    const updatedUser = {
      name: formData.get('name') as string,
      firstname: formData.get('firstname') as string,
    };

    try {
      const updatedUserFromServer = await updateUserById(userConnected.id, updatedUser);
      setUserConnected({
        ...userConnected, // Spread existing user data
        ...updatedUserFromServer, // Replace existing data by updated data
      });

      setEditing(false);
      showToastMessage(9, true); // Index of message to display, success
    } catch (error) {
      console.error(error);
      setError('Failed to update user. Please try again later.');
      setLoading(true);
      showToastMessage(9, false); // Index of error message, error
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
  {userConnected && (
    <input
      type="text"
      id="firstname"
      name="firstname"
      defaultValue={userConnected.firstname}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
      disabled={!editing}
    />
  )}
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-text-color text-xl font-bold mb-2">
            Nom :
          </label>
          {userConnected && (
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={userConnected.name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
              disabled={!editing}
            />
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-text-color text-xl font-bold mb-2">
            Email:
          </label>
          {userConnected && (
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={userConnected.email}
              autoComplete="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline"
              readOnly
            />
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="bg-secondary-color hover:bg-primary-color text-white text-2xl m-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Modifier
          </button>
          {editing && (
            <>
              <button
                type="submit"
                className="bg-primary-color hover:bg-secondary-color text-white text-2xl m-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sauvegarder les modifications
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="bg-secondary-color hover:bg-primary-color text-white text-2xl m-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
