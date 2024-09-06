'use client';
import Img from './Img';
import Refuge from './Refuge';
import Title from './Title';
import Modal from '../animalDetailModal/Modal';
import { getAnimals } from '../../services/api';
import { useEffect, useState } from 'react';

export default function Card() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnimals();
      console.log(data);
      setAnimals(data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 m-8">
        {animals.map((animal) => (
          <div className="w-auto sm:w-auto md:w-auto lg:w-auto bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg">
            <Img />

            <div className="p-4">
              <Title name={animal.name} />
              <Refuge />
              <Modal />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
