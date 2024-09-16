'use client';
import { useEffect, useState } from 'react';
import { useAnimal } from '../../context/animalContext';
import { useParams } from 'next/navigation';
import { useAuth } from '../../context/authContext';
import { createRequest } from '../../services/Request';

export default function AccommodationForm() {
  const { animalData } = useAnimal();
  const params = useParams();
  const [animal, setAnimal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { userConnected } = useAuth();
  const [currentDate, setCurrentDate] = useState('');

  // console.log(userConnected);

  useEffect(() => {
    if (animalData && params.id) {
      // console.log('Searching for animal with id:', params.id);
      const foundAnimal = animalData.find((animal) => animal.id === parseInt(params.id));
      // console.log('Found Animal:', foundAnimal);
      setAnimal(foundAnimal);
      setIsLoading(false);
    }
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    setCurrentDate(formattedDate);
  }, [params, animalData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.animal_id = parseInt(data.animal_id);
    const fetchData = async () => {
      const response = await createRequest(data);
      return response;
    };
    fetchData();
    // console.log('Form Data:', data);
  };

  if (isLoading) return <p>Chargement...</p>;
  if (!animal) return <p>Aucun animal trouvé avec l'ID fourni.</p>;

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
      </form>
    </>
  );
}
