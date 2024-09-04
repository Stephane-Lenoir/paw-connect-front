'use client';

import Link from 'next/link';
import Img from '../card/Img';

export default function Modal() {
  return (
    <>
      <Link
        className="bg-secondary-color text-white text-center px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/2 block mx-auto text-base font-caveat"
        href={'#'}
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        Détails
      </Link>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-auto sm:w-auto md:w-auto lg:w-auto">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-2xl text-center m-4">Nom de l'animal</h3>
          <Img />
          <div className="bg-primary-color rounded-xl">
            <h3 className="font-bold text-center p-2 m-5 text-2xl">Description de l'animal</h3>
            <ol className="p-4 text-xl font-bold">
              <li>Nom :</li>
              <li>Age :</li>
              <li>Race :</li>
              <li>Disponibilité :</li>
            </ol>
          </div>
          <div className="flex space-x-4">
            <button className="bg-secondary-color text-white px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/2 block mx-auto text-base font-caveat">
              Héberger
            </button>
            <button className="bg-secondary-color text-white px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/2 block mx-auto text-base font-caveat">
              Adopter
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
