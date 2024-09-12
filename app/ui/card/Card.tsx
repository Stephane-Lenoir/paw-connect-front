'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Img from './Img';
import Refuge from './Refuge';
import Title from './Title';
import Modal from './Modal';
import { getAnimals } from '../../services/Home';
import { getAllAnimals } from '../../services/Animals';
import { setUrlAnimal } from '../../utils/url';
import Loader from '../loader';

export default function Card() {
  const [animals, setAnimals] = useState([]);
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const fetchData = async () => {
        let data;
        if (pathname === '/') {
          data = await getAnimals();
          setLoading(false); // à enlever pour tester avec le timeout
        } else if (pathname === '/animals') {
          data = await getAllAnimals();
          setLoading(false); // à enlever pour tester avec le timeout
        }
        if (data) {
          setAnimals(data);
        }

        // // Simuler un délai de chargement de 2 secondes
        // setTimeout(() => {
        //   setLoading(false);
        // }, 2000);
      };
      fetchData();
    }
  }, [pathname, isClient]);

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
                <Modal animal={animal} />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
