// components/AccommodationForm.js
'use client';
import { useEffect, useState } from 'react';
import { useAnimal } from '../../context/animalContext';
import { useParams } from 'next/navigation';
import { useAuth } from '../../context/authContext';
import { createRequest } from '../../services/Request';
import Loader from '../loader';
import { useToast } from '../../context/toastContext';
import Link from 'next/link';
import NeedLogin from '../needLogin';
import { Animal } from '../../@types/animal';
import { AuthContextType } from '../../@types/auth';
import { ToastContextType } from '../../@types/toast';
import { AccommodationFormData } from '../../@types/request';

export default function AccommodationForm() {
  const { animalData } = useAnimal();
  const params = useParams();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { userConnected } = useAuth() as AuthContextType;
  const [currentDate, setCurrentDate] = useState<string>('');
  const { showToastMessage } = useToast() as ToastContextType;

  useEffect(() => {
    if (animalData && params.id) {
      const foundAnimal = animalData.find((animal) => 
        animal.id === parseInt(params.id as string)
      );
      setAnimal(foundAnimal || null);
      setIsLoading(false);
    }
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setCurrentDate(formattedDate);
  }, [params, animalData]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as AccommodationFormData;
    data.animal_id = parseInt(data.animal_id.toString());
    
    const fetchData = async () => {
      const response = await createRequest(data);
      if (response) {
        showToastMessage(0, true);
      } else {
        showToastMessage(0, false);
      }
    };
    fetchData();
  };

  if (isLoading) return <Loader />;
  if (!animal) return <p>Aucun animal trouvé avec l'ID fourni.</p>;

  if (!userConnected) {
    return (
      <>
        <NeedLogin />
      </>
    );
  }

  return (
    <>
      <h2 className="text-center text-2xl p-2 font-bold">Formulaire d'hébergement</h2>

      <form className="m-2 flex flex-col gap-px items-center" onSubmit={handleSubmit}>
        <div className="text-xl">
          <h3 className="p-2">Nom :</h3>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            className="input input-bordered w-full max-w-xs"
            defaultValue={userConnected.name || ''}
            readOnly
          />
        </div>
        <div className="text-xl">
          <h3 className="p-2">Prénom :</h3>
          <input
            type="text"
            name="firstname"
            placeholder="Prénom"
            className="input input-bordered w-full max-w-xs"
            defaultValue={userConnected.firstname || ''}
            readOnly
          />
        </div>
        <div className="text-xl">
          <h3 className="p-2">Email :</h3>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            autoComplete="email"
            defaultValue={userConnected.email || ''}
            readOnly
            required
          />
        </div>
        <div className="text-xl">
          <h3 className="p-2">Nom de l'animal :</h3>
          <input
            type="text"
            name="animalName"
            className="input input-bordered w-full max-w-xs"
            defaultValue={animal.name || ''}
            readOnly
          />
        </div>
        <div className="text-xl">
          <h3 className="p-2">Race de l'animal :</h3>
          <input
            type="text"
            name="animalRace"
            className="input input-bordered w-full max-w-xs"
            defaultValue={animal.race || ''}
            readOnly
          />
        </div>
        <div className="text-xl">
          <h3 className="p-2">Date de la demande :</h3>
          <input
            type="date"
            name="date"
            className="input input-bordered w-full max-w-xs"
            value={currentDate}
            readOnly
          />
        </div>
        <div className="text-xl">
          <input
            type="number"
            name="animal_id"
            className="input input-bordered w-full max-w-xs"
            value={animal.id}
            readOnly
            hidden
          />
        </div>
        <button
          type="submit"
          className="text-xl btn bg-primary-color hover:bg-secondary-color w-xl m-4"
        >
          Envoyer la demande
        </button>
        <Link
          href="/"
          className="text-xl btn bg-primary-color items-center hover:bg-secondary-color w-xl m-4"
        >
          Retour à l'accueil
        </Link>
      </form>
    </>
  );
}
