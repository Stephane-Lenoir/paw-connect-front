import { useState } from 'react';
import { searchAnimal } from '../../services/Search';
import Modal from '../card/Modal';
import { Animal } from '../../@types/animal';
import { SearchQuery } from '../../@types/search';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Animal[]>([]);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleSearch = async (term: string) => {
    const formattedTerm = capitalizeFirstLetter(term);
    setQuery(formattedTerm);
    if (formattedTerm.length > 0) {
      try {
        const searchFilters: SearchQuery = { term: formattedTerm };
        const response = await searchAnimal(searchFilters);
        setResults(response);
      } catch (error) {
        console.error(error);
      }
    } else {
      setResults([]);
    }
  };
  // console.log(results);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(query);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedTerm = e.target.value;
    setQuery(formattedTerm);
    handleSearch(formattedTerm);
  };

  const handleAnimalClick = (animal: Animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnimal(null);
    resetSearch(); // call to function to reboot the Search bar
  };

  const resetSearch = () => {
    setQuery('');
    setResults([]);
  };

  return (
    <div className="relative m-2 w-full sm:w-64 z-10">
      <input
        type="text"
        placeholder="Rechercher un animal, ex : chat"
        className="input input-bordered input-accent w-full max-w-xs"
        name="search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {results.length > 0 && (
        <div className="absolute mt-1 w-full max-w-xs bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="max-h-60 overflow-auto">
            {results.map((result) => (
              <li
                key={result.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleAnimalClick(result)}
              >
                {result.name} - {result.species}
              </li>
            ))}
          </ul>
        </div>
      )}
      {isModalOpen && selectedAnimal && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} animal={selectedAnimal} />
      )}
    </div>
  );
}
