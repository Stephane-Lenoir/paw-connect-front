'use client';

import { createContext, useContext, useState } from 'react';
import { FilterContextType, Filters } from '../@types/filter';
import { Animal } from '../@types/animal';

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({
    age: '',
    gender: '',
    species: '',
    race: '',
    availability: '',
  });
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>([]);

  const calculateAge = (birthday: string): number => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const applyFilters = (animals: Animal[]) => {
    const filtered = animals.filter((animal) => {
      const age = animal.birthday ? calculateAge(animal.birthday) : 0;
      return (
        (filters.age === '' || age <= parseInt(filters.age)) &&
        (filters.gender === '' || animal.gender === filters.gender) &&
        (filters.species === '' || animal.species === filters.species) &&
        (filters.race === '' || animal.race === filters.race) &&
        (filters.availability === '' || animal.availability === (filters.availability === 'true'))
      );
    });
    setFilteredAnimals(filtered);
  };

  const resetFilters = () => {
    setFilters({
      age: '',
      gender: '',
      species: '',
      race: '',
      availability: '',
    });
  };

  return (
    <FilterContext.Provider
      value={{ filters, setFilters, filteredAnimals, applyFilters, resetFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};