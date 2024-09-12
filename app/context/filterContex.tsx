'use client';

// FilterContext.js
import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    age: '',
    gender: '',
    species: '',
    race: '',
    availability: '',
  });
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  const applyFilters = async (animals) => {
    // Logique de filtrage ici
    const filtered = animals.filter((animal) => {
      return (
        (filters.age === '' || animal.age === filters.age) &&
        (filters.gender === '' || animal.gender === filters.gender) &&
        (filters.species === '' || animal.species === filters.species) &&
        (filters.race === '' || animal.race === filters.race) &&
        (filters.availability === '' || animal.availability === (filters.availability === 'true'))
      );
    });
    setFilteredAnimals(filtered);
  };

  return (
    <FilterContext.Provider value={{ filters, setFilters, filteredAnimals, applyFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
