import Link from 'next/link';
import { searchAnimal } from '../../services/Search';
import { useEffect, useState } from 'react';
import { getAllAnimals } from '../../services/Animals';

export default function Filtres() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [race, setRace] = useState('');
  const [availability, setAvailability] = useState('');
  const [results, setResults] = useState([]);

  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const data = await getAllAnimals();
        setAnimals(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimals();
  }, []);

  const handleFilter = async () => {
    const query = {
      age,
      gender,
      species,
      race,
      availability,
    };

    try {
      const data = await searchAnimal(query);
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUniqueSpecies = () => {
    const speciesMap = {};
    animals.forEach((animal) => {
      const lowerCaseSpecies = animal.species.toLowerCase();
      if (!speciesMap[lowerCaseSpecies]) {
        speciesMap[lowerCaseSpecies] = animal.species;
      }
    });
    return Object.values(speciesMap);
  };

  // const getUniqueSpecies = () => {
  //   const speciesSet = new Set([...animals.map((animal) => animal.species)]);
  //   return Array.from(speciesSet);
  // };

  const uniqueSpecies = getUniqueSpecies();

  console.log(results);

  return (
    <>
      <div className="w-4/5 sm:w-1/6 md:w-4/5 lg:w-1/6 bg-background-color flex flex-col items-center min-h-screen mt-5 mb-5 rounded-xl">
        <h3 className="text-center text-3xl mt-6 mb-6">Filtres</h3>
        <div className="collapse collapse-arrow bg-background-color">
          <input type="checkbox" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">Âge</div>
          <div className="collapse-content bg-secondary-color">
            <label htmlFor="age-range" className="block mb-2 text-lg">
              Sélectionnez un âge :
            </label>
            <input
              type="range"
              id="age-range"
              min="1"
              max="20"
              value={age}
              className="range"
              step="1"
              onChange={(e) => setAge(e.target.value)}
            />
            <div className="flex w-full justify-between px-2 text-xs">
              {[...Array(20)].map((_, index) => (
                <span key={index + 1}>{index + 1}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-background-color">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Sexe</div>
          <div className="collapse-content bg-secondary-color flex justify-evenly">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                className="mt-5"
                onChange={(e) => setGender(e.target.value)}
              />
              Mâle
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                className="mt-5"
                onChange={(e) => setGender(e.target.value)}
              />
              Femelle
            </label>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-background-color">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Espèces</div>
          <div className="collapse-content bg-secondary-color flex justify-evenly">
            {uniqueSpecies.map((species) => (
              <label key={species} className="block mb-2 mt-5">
                <input
                  type="radio"
                  name="species"
                  value={species}
                  onChange={(e) => setSpecies(e.target.value)}
                  className="mr-2"
                />
                {species}
              </label>
            ))}
          </div>
        </div>
        {/* <div className="collapse collapse-arrow bg-background-color">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Races</div>
          <div className="collapse-content bg-secondary-color">
            
            <Link href="">
              <p>Chartreux</p>
            </Link>
          </div>
        </div> */}
        <div className="collapse collapse-arrow bg-background-color">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Disponibilité</div>
          <div className="collapse-content bg-secondary-color flex justify-evenly">
            <label>
              <input
                type="radio"
                name="availability"
                value="true"
                className="mt-5"
                onChange={(e) => setAvailability(e.target.value)}
              />
              Oui
            </label>
            <label>
              <input
                type="radio"
                name="availability"
                value="false"
                checked={availability === 'false'}
                onChange={() => setAvailability('false')}
                className="mt-5"
              />
              Non
            </label>
          </div>
        </div>
        <button
          className="bg-secondary-color text-white px-4 py-2 rounded-full mt-8 hover:bg-primary-color transition-colors duration-300 ease-in-out block mx-auto text-base font-bold font-caveat"
          type="button"
          onClick={handleFilter}
        >
          Appliquer les filtres
        </button>
      </div>
    </>
  );
}
