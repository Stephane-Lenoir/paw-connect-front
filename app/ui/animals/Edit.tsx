'use client';

import { useEffect, useState } from 'react';
import { deleteAnimal, getAnimalByUserId, updateAnimal } from '../../services/Animals';
import Image from 'next/image';
import { setUrlAnimal } from '../../utils/url';
import Menu from '../dashboard/Menu';

export function EditAnimal() {
  const [animals, setAnimals] = useState([]);
  const [userId, setUserId] = useState(null);
  const [editingAnimalId, setEditingAnimalId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');

    if (token) {
      const [, payload] = token.split('.');
      const decodedPayload = JSON.parse(atob(payload));
      setUserId(decodedPayload.id);
    } else {
      setError('No JWT token found. Please log in.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          setLoading(true);
          const data = await getAnimalByUserId(userId);
          setAnimals(data);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setError('Failed to fetch animals. Please try again later.');
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [userId]);

  const handleSave = async (e, animalId) => {
    e.preventDefault();
    const updatedAnimal = {
      name: e.target.name.value,
      description: e.target.description.value,
      availability: e.target.availability.value,
      gender: e.target.gender.value,
      race: e.target.race.value,
      location: e.target.location.value,
      species: e.target.species.value,
      birthday: e.target.birthday.value,
      // photo: e.target.photo.value,
    };
    try {
      await updateAnimal(animalId, updatedAnimal);
      setEditingAnimalId(null);
      const updatedAnimals = animals.map((animal) => {
        if (animal.id === animalId) {
          return { ...animal, ...updatedAnimal };
        }
        return animal;
      });
      setAnimals(updatedAnimals);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (animalId) => {
    try {
      await deleteAnimal(animalId);
      const updatedAnimals = animals.filter((animal) => animal.id !== animalId);
      setAnimals(updatedAnimals);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(animals);

  return (
    <>
      <div className="w-full min-h-screen p-8">
        <Menu />
        <h3 className="font-bold text-2xl mb-6 mt-6 text-center">Vos animaux</h3>
        <div className="flex flex-wrap justify-center gap-10 mt-8 mb-8">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="w-80 h-[600px] bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-lg flex flex-col"
            >
              <div className="w-full h-80 relative overflow-hidden rounded-t-lg">
                <Image
                  src={setUrlAnimal(animal.photo)}
                  alt="Animal"
                  layout="fill"
                  objectFit="cover"
                  className="bg-primary-color"
                />
              </div>

              <div className="p-4 flex-grow flex flex-col overflow-hidden">
                <div className="flex-grow overflow-y-auto mb-4">
                  {editingAnimalId === animal.id ? (
                    <form
                      id={`edit-form-${animal.id}`}
                      onSubmit={(e) => handleSave(e, animal.id)}
                      className="flex flex-col items-center"
                      encType="multipart/form-data"
                    >
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline mb-2"
                        type="text"
                        name="name"
                        defaultValue={animal.name}
                      />
                      <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline mb-2"
                        name="description"
                        defaultValue={animal.description}
                        rows="3"
                      />
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline mb-2"
                        type="text"
                        name="availability"
                        defaultValue={animal.availability ? 'true' : 'false'}
                      />
                      <label className="input input-bordered flex items-center gap-2 w-full">
                        <select className="grow" name="gender">
                          <option value="">Sexe de l'animal</option>
                          <option value="Mâle">Mâle</option>
                          <option value="Femelle">Femelle</option>
                        </select>
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline mb-2"
                        type="text"
                        name="race"
                        defaultValue={animal.race}
                      />
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline mb-2"
                        type="text"
                        name="location"
                        defaultValue={animal.location}
                      />
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline mb-2"
                        type="text"
                        name="species"
                        defaultValue={animal.species}
                      />

                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        (YYYY-MM-DD):
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-text-color leading-tight focus:outline-none focus:shadow-outline mb-2"
                        type="text"
                        name="birthday"
                        defaultValue={animal.birthday}
                      />

                      {/* <label className="input input-bordered flex items-center gap-2 w-full">
                        <input
                          type="file"
                          className="file-input file-input-bordered w-full max-w-xs"
                          name="photo"
                          defaultValue={animal.photo}
                        />
                      </label> */}
                    </form>
                  ) : (
                    <>
                      <p>
                        <strong>Nom :</strong> {animal.name}
                      </p>
                      <p>
                        <strong>Description :</strong> {animal.description}
                      </p>
                      <p>
                        <strong>Disponibilité :</strong>{' '}
                        {animal.availability ? 'Disponible' : 'Indisponible'}
                      </p>
                      <p>
                        <strong>Genre :</strong> {animal.gender}
                      </p>
                      <p>
                        <strong>Race :</strong> {animal.race}
                      </p>
                      <p>
                        <strong>Location :</strong> {animal.location}
                      </p>
                      <p>
                        <strong>Espèce :</strong> {animal.species}
                      </p>
                      <p>
                        <strong>Anniversaire :</strong> {animal.birthday}
                      </p>
                    </>
                  )}
                </div>

                <div className="flex justify-between mt-auto">
                  {editingAnimalId === animal.id ? (
                    <button
                      type="submit"
                      form={`edit-form-${animal.id}`}
                      className="bg-secondary-color text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out text-base font-caveat"
                    >
                      Enregistrer
                    </button>
                  ) : null}
                  <button
                    type="button"
                    onClick={() =>
                      setEditingAnimalId(editingAnimalId === animal.id ? null : animal.id)
                    }
                    className="bg-secondary-color text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out text-base font-caveat"
                  >
                    {editingAnimalId === animal.id ? 'Annuler' : 'Modifier'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(animal.id)}
                    className="bg-secondary-color text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out text-base font-caveat"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
