'use client';

import { useEffect, useState } from 'react';

import { getAnimalByUserId } from '../../services/Animals';
import Image from 'next/image';

export function EditAnimal() {
  const [animals, setAnimals] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
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

    // Fetch the animals of the user
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

  console.log(userId);

  console.log(animals);

  return (
    <>
      <h3 className="font-bold text-2xl mb-6 mt-6 text-center">Vos animaux</h3>
      <div className="flex flex-wrap justify-center gap-10 mt-8 mb-8">
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="w-80 bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg"
          >
            {/* <Img photo={animal.photo} /> */}

            <Image src={animal.photo} alt="photo" width={300} height={300} />

            <div className="p-4">
              {/* <Title name={animal.name} gender={animal.gender} />
              <Refuge refuge={animal.user.name} /> */}
              <p> {animal.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
