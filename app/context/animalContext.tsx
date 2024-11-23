'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAllAnimals } from '../services/Animals';
import { AnimalContextType, Animal } from '../@types/animal';

const AnimalContext = createContext<AnimalContextType | undefined>(undefined);

export const AnimalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [animalData, setAnimalData] = useState<Animal[] | undefined>();

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const data = await getAllAnimals();
        setAnimalData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
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

export const useAnimal = () => {
  const context = useContext(AnimalContext);
  if (!context) {
    throw new Error('useAnimal must be used within an AnimalProvider');
  }
  return context;
};