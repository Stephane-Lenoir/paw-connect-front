import Image from 'next/image';
import Menu from '../dashboard/Menu';

export function Add() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Menu />
      <h3 className="font-bold text-2xl mb-6 text-center">Ajout d'un animal</h3>
      <form className="w-full max-w-lg mx-auto space-y-6">
        <div className="mb-4">
          <Image
            src="/chien.jpg"
            alt="Chien"
            className="w-full h-auto object-cover rounded-lg shadow-md"
            width={400}
            height={500}
          ></Image>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="text" className="grow" name="name" placeholder="Nom de l'animal" />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="text" className="grow" name="species" placeholder="Espèce de l'animal" />
          </label>
        </div>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <input
            type="text"
            className="grow"
            name="description"
            placeholder="Description de l'animal"
          />
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <select className="grow" name="sex">
              <option value="">Sexe de l'animal</option>
              <option value="male">Mâle</option>
              <option value="female">Femelle</option>
            </select>
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              type="text"
              className="grow"
              name="location"
              placeholder="Localisation de l'animal"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="number" className="grow" name="age" placeholder="Age de l'animal" />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <select className="grow" name="availability">
              <option value="">Disponibilité de l'animal</option>
              <option value="available">Disponible</option>
              <option value="not_available">Non disponible</option>
            </select>
          </label>
        </div>

        <div className="modal-action mt-6 flex justify-center">
          <button type="submit" className="btn bg-primary-color w-full hover:bg-secondary-color">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}
