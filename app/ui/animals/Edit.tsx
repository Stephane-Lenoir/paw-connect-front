'use client';

import { useEffect, useState } from 'react';
import { deleteAnimal, getAnimalByUserId, updateAnimal } from '../../services/Animals';
import Image from 'next/image';

export function EditAnimal() {
  const [animals, setAnimals] = useState([]);
  const [userId, setUserId] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');

    if (token) {
      const [header, payload, signature] = token.split('.');
      const decodedPayload = JSON.parse(atob(payload));
      setUserId(decodedPayload.id);
    }

    const fetchData = async () => {
      try {
        const data = await getAnimalByUserId(userId);
        setAnimals(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId]);

  const handleChange = (e, animalId, field) => {
    const updatedAnimals = animals.map((animal) => {
      if (animal.id === animalId) {
        return { ...animal, [field]: e.target.value };
      }
      return animal;
    });
    setAnimals(updatedAnimals);
  };

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
    };
    try {
      await updateAnimal(animalId, updatedAnimal);
      setEditMode(false);
      // Mettre à jour l'état local avec les nouvelles données de l'animal
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
      // Mettre à jour l'état local pour supprimer l'animal de la liste
      const updatedAnimals = animals.filter((animal) => animal.id !== animalId);
      setAnimals(updatedAnimals);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h3 className="font-bold text-2xl mb-6 mt-6 text-center">Vos animaux</h3>
      <div className="flex flex-wrap justify-center gap-10 mt-8 mb-8">
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="w-80 bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg"
          >
            <div className="w-full h-80 relative overflow-hidden rounded-lg">
              <Image
                src={animal.photo}
                alt="Animal"
                layout="fill"
                objectFit="cover"
                className="bg-primary-color"
              />
            </div>

            <div className="p-4">
              {editMode ? (
                // Afficher les champs en mode édition
                <form
                  onSubmit={(e) => handleSave(e, animal.id)}
                  className="flex flex-col items-center"
                >
                  <input type="text" name="name" defaultValue={animal.name} />
                  <input type="text" name="description" defaultValue={animal.description} />
                  <input type="text" name="availability" defaultValue={animal.availability} />
                  <input type="text" name="gender" defaultValue={animal.gender} />
                  <input type="text" name="race" defaultValue={animal.race} />
                  <input type="text" name="location" defaultValue={animal.location} />
                  <input type="text" name="species" defaultValue={animal.species} />
                  <button
                    type="submit"
                    className="bg-secondary-color text-white px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out text-base font-caveat"
                  >
                    Enregistrer
                  </button>
                </form>
              ) : (
                // Afficher les champs en mode lecture
                <>
                  <p>Nom : {animal.name}</p>
                  <p>Description : {animal.description}</p>
                  <p>Disponibilité : {animal.availability}</p>
                  <p>Genre : {animal.gender}</p>
                  <p>Race : {animal.race}</p>
                  <p>Location : {animal.location}</p>
                  <p>Espéce : {animal.species}</p>
                </>
              )}

              <div className="flex flex-wrap">
                <button
                  type="button"
                  onClick={() => setEditMode(!editMode)}
                  className="bg-secondary-color text-white px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/3 block mx-auto text-base font-caveat"
                >
                  Modifier
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(animal.id)}
                  className="bg-secondary-color text-white px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/3 block mx-auto text-base font-caveat"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
