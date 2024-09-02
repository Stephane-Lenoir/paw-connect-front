"use client"; // Directive pour les composants côté client

import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav className="bg-base-100 shadow-md w-full">
      <div className="container mx-auto px-4 py-4">
        {/* Première ligne */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Link href="/" className="text-xl font-bold">MyLogo</Link>
          <Link href="/adopter-heberger" className="btn btn-ghost normal-case text-lg">Adopter</Link>
          <Link href="/localisation" className="btn btn-ghost normal-case text-lg">Localisation</Link>
          <Link href="/login" className="btn btn-ghost normal-case text-lg">Login</Link>
        </div>

        {/* Deuxième ligne */}
        <div className="grid grid-cols-4 items-center gap-4 mt-4 ">
          <Link href="/adopter-heberger" className="btn btn-ghost normal-case text-lg">Héberger</Link>
          <Link href="/don" className="btn btn-ghost normal-case text-lg">Faire un don</Link>
          <button onClick={toggleSearch} className="btn btn-ghost normal-case text-lg">Recherche</button>
          {searchVisible && (
            <input
              type="text"
              placeholder="Rechercher..."
              className="input input-bordered mt-2 ml-4"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
