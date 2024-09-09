import Image from 'next/image';
import Menu from '../dashboard/Menu';
import { createAnimal } from '../../services/Animals';
import { useState, useEffect } from 'react';

export function Add() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Récupérez le token JWT à partir du stockage local lorsque le composant est monté
    const token = localStorage.getItem('jwt_token');

    if (token) {
      // Divisez le token en trois parties : en-tête, charge utile et signature
      const [header, payload, signature] = token.split('.');

      // console.log(signature);

      // La charge utile est la partie du token qui contient les données utilisateur, qui est encodée en base64
      // Décodez la charge utile en JSON
      const decodedPayload = JSON.parse(atob(payload));

      // Extrayez l'ID utilisateur de la charge utile
      setUserId(decodedPayload.id); // Assurez-vous que votre token contient une propriété 'id'
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const animalData = Object.fromEntries(formData);

    // console.log('jwt_token', localStorage.getItem('jwt_token'));

    // console.log(animalData);

    animalData.user_id = userId;

    const fetchData = async () => {
      const data = await createAnimal(animalData);

      return data;
    };

    fetchData();
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <Menu />
        <h3 className="font-bold text-2xl mb-6 text-center">Ajout d'un animal</h3>
        <form
          className="w-full max-w-lg mx-auto space-y-6"
          onSubmit={handleSubmit}
          enctype="multipart/form-data"
        >
          <div className="mb-4">
            <Image
              src="/chien.jpg"
              alt="Chien"
              className="w-full h-auto object-cover rounded-lg shadow-md"
              width={400}
              height={500}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <input type="text" className="grow" name="name" placeholder="Nom de l'animal" />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <input type="text" className="grow" name="species" placeholder="Espèce de l'animal" />
            </label>

            <label className="input input-bordered flex items-center gap-2 w-full">
              <input type="text" className="grow" name="race" placeholder="Race de l'animal" />
            </label>
          </div>

          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              type="text"
              className="grow"
              name="description"
              placeholder="Description de l'animal"
            />
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <select className="grow" name="gender">
                <option value="">Sexe de l'animal</option>
                <option value="male">Mâle</option>
                <option value="female">Femelle</option>
              </select>
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <input
                type="text"
                className="grow"
                name="location"
                placeholder="Localisation de l'animal"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="number" className="grow" name="birthday" placeholder="Age de l'animal" />
          </label> */}
            <label className="input input-bordered flex items-center gap-2 w-full">
              <select className="grow" name="availability">
                <option value="">Disponibilité de l'animal</option>
                <option className="" value="true">
                  Disponible
                </option>
                <option value="false">Non disponible</option>
              </select>
            </label>
          </div>

          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
          </label>

          {/* <div className="mb-4">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="file" className="grow" />
          </label>
        </div> */}

          <div className="modal-action mt-6 flex justify-center">
            <button type="submit" className="btn bg-primary-color w-full hover:bg-secondary-color">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
