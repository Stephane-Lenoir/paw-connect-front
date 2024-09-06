'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Img from './Img';
import Refuge from './Refuge';
import Title from './Title';
import Modal from './Modal';
import { getAnimals } from '../../services/Home';
import { getAllAnimals } from '../../services/Animals';

export default function Card() {
  const [animals, setAnimals] = useState([]);
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

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
          console.log(data);
          setAnimals(data.data);
        }
      };
      fetchData();
    }
  }, [pathname, isClient]);

  if (!isClient) {
    return null; // or a loading indicator
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 m-">
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="w-80 bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg"
          >
            <Img photo={animal.photo} />

            <div className="p-4">
              <Title name={animal.name} gender={animal.gender} />
              <Refuge refuge={animal.user.name} />
              <Modal animal={animal} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
