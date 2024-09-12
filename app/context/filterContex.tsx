'use client';

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
    const filtered = animals.filter((animal) => {
      return (
        (filters.age === '' || animal.age <= parseInt(filters.age)) &&
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
  return useContext(FilterContext);
};
