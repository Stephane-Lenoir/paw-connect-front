'use client';
import { useEffect, useState } from "react";
import api from '../../services/axiosConfig';



export default function AccomodationForm() {

  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('jwt_token');
    
    if (storedToken) {
      setToken(storedToken);
      const [header, payload, signature] = storedToken.split('.');
      const decodedPayload = JSON.parse(atob(payload));

      setUserId(decodedPayload.id);
      console.log(decodedPayload.id);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId || !token) return;

      try {
        const response = await api.get(`profiles/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchUserData();
  }, [userId, token]);
     
 
  return (
    <>
      <h2 className="text-center text-2xl p-2 font-bold">Formulaire d'hébergement</h2>
      <form className="m-2 flex flex-col gap-px items-center">
        <div className=" text-xl">
          <h3 className="p-2">Nom :</h3>
          <input type="text" placeholder="Nom" className="input input-bordered w-full max-w-xs" value={userData?.name} readonly="readonly"/>
        </div> 
        <div className="text-xl">
          <h3 className="p-2">Prénom :</h3>
          <input
            type="text"
            placeholder="Prénom"
            className="input input-bordered w-full max-w-xs"
            value={userData?.firstname}
            readonly="readonly"
          />
        </div>
        <div className="text-xl">
          <h3 className="p-2">Email :</h3>
          <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" 
          value={userData?.email}
          readonly="readonly"/>
        </div>

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
