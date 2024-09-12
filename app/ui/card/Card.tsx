'use client';

// Card.js
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Img from './Img';
import Refuge from './Refuge';
import Title from './Title';
import Modal from './Modal';
import Loader from '../loader';
import { getAnimals } from '../../services/Home';
import { getAllAnimals } from '../../services/Animals';
import { setUrlAnimal } from '../../utils/url';
import { useFilter } from '../../context/filterContex';

export default function Card({ onReload }) {
  const [animals, setAnimals] = useState([]);
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);
  const { filteredAnimals } = useFilter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const fetchData = async () => {
        let data;
        if (pathname === '/') {
          data = await getAnimals();
        } else if (pathname === '/animals') {
          data = await getAllAnimals();
        }
        if (data) {
          setAnimals(data);
        }
        setLoading(false);
      };
      fetchData();
    }
  }, [pathname, isClient, onReload]);

  useEffect(() => {
    if (pathname === '/animals' && filteredAnimals.length > 0) {
      setAnimals(filteredAnimals);
    }
  }, [filteredAnimals, pathname]);

  if (!isClient) {
    return null; // or a loading indicator
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap justify-center gap-10 m-">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="w-80 bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg"
            >
              <Img photo={setUrlAnimal(animal.photo)} />
              <div className="p-4">
                <Title name={animal.name} gender={animal.gender} />
                <Refuge refuge={animal.user.name} />
                <p>
                  Disponibilité :
                  {animal.availability ? (
                    <span className="text-green-500"> ✅</span>
                  ) : (
                    <span className="text-red-500"> ❌</span>
                  )}
                </p>
                <Modal animal={animal} />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
