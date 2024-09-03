'use client';

{
  /* Imports des composants*/
}

import Button from './Button';
import Img from './Img';
import Refuge from './Refuge';
import Title from './Title';

import { useState } from 'react';
import animalDetailModal from '../animalDetailModal/animalDetailModal';

export default async function Card() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  {
    /* fecth la liste des animaux depuis http://localhost:3000/api/ */
  }
  {
    /*const data = await fetch('http://localhost:3000/api/'); // const animals = await data.json(); //*/
  }
  {
    /*console.log(animals);*/
  }
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 m-8">
        {/* {animals.map((animal) => (
          <div
            key={animal.id}
            className="w-10/12 sm:w-1/2 md:w-1/3 lg:w-1/6 bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg"
          >
            <p>{animal.name}</p>
            <p>{animal.breed}</p>
            <p>{animal.age}</p>
            <p>{animal.location}</p>
          </div>
        ))} */}
        <div className="w-auto sm:w-auto md:w-auto lg:w-auto bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg">
          <Img />

          <div className="p-4">
            <Title />
            <Refuge />
            <Button />
          </div>
        </div>

        {/* Le reste on pourra supprimer, c'est pour la démo */}

        <div className="w-auto sm:w-auto md:w-auto lg:w-auto bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg">
          <Img />

          <div className="p-4">
            <Title />
            <Refuge />
            <Button />
          </div>
        </div>

        <div className="w-auto sm:w-auto md:w-auto lg:w-auto bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg">
          <Img />

          <div className="p-4">
            <Title />
            <Refuge />
            <Button />
          </div>
        </div>

        <div className="w-auto sm:w-auto md:w-auto lg:w-auto bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg">
          <Img />

          <div className="p-4">
            <Title />
            <Refuge />
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}
