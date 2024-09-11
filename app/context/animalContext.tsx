'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAllAnimals } from '../services/Animals';

const AnimalContext = createContext();

export const AnimalProvider = ({ children }) => {
  const [animalData, setAnimalData] = useState();

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const data = await getAllAnimals();
        console.log('Data fetched:', data); // Ajoutez ce console.log pour vérifier les données récupérées
        setAnimalData(data);
      } catch (error) {
        console.error('Error fetching data:', error); // Ajoutez ce console.log pour vérifier les erreurs
      }
    };
    fetchAnimal();
  }, []);

  return (
    <AnimalContext.Provider value={{ animalData, setAnimalData }}>
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimal = () => useContext(AnimalContext);
