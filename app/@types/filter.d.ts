import { Animal } from './animal';

export interface Filters {
    age: string;
    gender: string;
    species: string;
    race: string;
    availability: string;
}

export interface FilterContextType {
    filters: Filters;
    setFilters: (filters: Filters) => void;
    filteredAnimals: Animal[];
    applyFilters: (animals: Animal[]) => void;
    resetFilters: () => void;
}