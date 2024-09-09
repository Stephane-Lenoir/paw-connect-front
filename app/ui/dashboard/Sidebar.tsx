'use client';

import Link from 'next/link';
import Profil from './Profil';
import { useState } from 'react';
import { Add } from '../animals/Add';
import { EditAnimal } from '../animals/Edit';

export default function Sidebar() {
  const [activeComponent, setActiveComponent] = useState('profil');

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col bg-background-color ">
          {activeComponent === 'profil' && <Profil />}

          {activeComponent === 'edit' && <EditAnimal />}

          {activeComponent === 'add' && <Add />}

          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-2xl text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li onClick={() => setActiveComponent('profil')}>
              <Link href="">Mon profil</Link>
            </li>
            <li className="dropdown dropdown-bottom">
              <Link href="#" tabIndex={0} role="button">
                Gestion des animaux
              </Link>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li className="text-lg" onClick={() => setActiveComponent('edit')}>
                  <Link href="">Vos animaux</Link>
                </li>
                <li className="text-lg" onClick={() => setActiveComponent('add')}>
                  <Link href="">Ajouter un animal</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href={'#'}>Historique de navigation</Link>
            </li>

            <li>
              <Link href={'#'}>Messages</Link>
            </li>

            <label
              htmlFor="my-drawer-2"
              className="btn bg-primary-color hover:bg-secondary-color drawer-button lg:hidden mb-8"
            >
              Fermer
            </label>
          </ul>
        </div>
      </div>
    </>
  );
}
