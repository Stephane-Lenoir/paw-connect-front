import React from 'react';
import NavBar from '../ui/header/nav-bar';


const AnimalPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <NavBar />

      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Animal Name */}
        <h1 className="text-4xl font-bold mb-8">Nom de l'animal</h1>

        {/* Animal Image */}
        <img src="/image" alt="Animal" className="w-80 h-80 object-cover rounded-lg mb-8" />

        {/* Animal Description */}
        <p className="text-lg mb-12">Description Animal</p>

        {/* Actions */}
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
            Héberger
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">
            Adopter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalPage;