'use client';
import { useEffect, useState } from 'react';
import api from '../../services/axiosConfig';
import { useAnimal } from '../../context/animalContext';

export default function AccomodationForm() {
  const { animalData, setAnimalData } = useAnimal();
  console.log('Animal data in component:', animalData);
  // États pour gérer les données utilisateur, le token, et l'état de chargement
  /*const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState({
    name: '',
    firstname: '',
    email: ''
  });
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);*/

  // Effet pour récupérer et décoder le token JWT du localStorage
  // useEffect(() => {
  //   const storedToken = localStorage.getItem('jwt_token');

  //   if (storedToken) {
  //     setToken(storedToken);
  //     // Décodage du payload du token JWT
  //     const [, payload] = storedToken.split('.');
  //     const decodedPayload = JSON.parse(atob(payload));
  //     setUserId(decodedPayload.id);
  //   } else {
  //     // Si pas de token, on arrête le chargement
  //     setIsLoading(false);
  //   }
  // }, []);

  // // Effet pour charger les données utilisateur une fois que nous avons l'ID et le token
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     if (!userId || !token) return;

  //     try {
  //       const response = await api.get(`profiles/${userId}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           'Content-Type': 'application/json',
  //         },
  //       });

  //       // Mise à jour de l'état avec les données reçues
  //       setUserData(response.data);
  //     } catch (error) {
  //       console.error('Erreur lors de la récupération des données:', error);
  //     } finally {
  //       // Dans tous les cas, on arrête le chargement
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchUserData();
  // }, [userId, token]);

  // // Gestionnaire pour les changements dans les champs du formulaire
  // // Même si les champs sont en lecture seule, c'est une bonne pratique de l'inclure
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formdData = new FormData(event.target);
    const data = Object.fromEntries(formdData);
    console.log(data);
  };

  // Affichage d'un message de chargement si les données ne sont pas encore prêtes
  // if (isLoading) {
  //   return <p>Chargement des données...</p>;
  // }

  // Rendu du formulaire
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
            // value={userData.name}
            // onChange={handleChange}
            // readOnly
          />
        </div>
        <div className="text-xl">
          <h3 className="p-2">Prénom :</h3>
          <input
            type="text"
            name="firstname"
            placeholder="Prénom"
            className="input input-bordered w-full max-w-xs"
            // value={userData.firstname}
            // onChange={handleChange}
            // readOnly
          />
        </div>
        <div className="text-xl">
          <h3 className="p-2">Email :</h3>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            // value={userData.email}
            // onChange={handleChange}
            // readOnly
          />
        </div>

        {/* Ces champs de textarea ne sont pas contrôlés. 
            Vous pourriez vouloir les contrôler de la même manière que les inputs ci-dessus */}
        <label className="form-control">
          <div className="label">
            <span className="label-text text-xl p-2">
              Indiquez vos expériences avec des animaux :
            </span>
          </div>
          <textarea
            placeholder="Entrez votre texte..."
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text text-xl p-2">
              Pouvez vous détailler l'environnement pour l'animal :
            </span>
          </div>
          <textarea
            placeholder="Entrez votre texte..."
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
        </label>

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
