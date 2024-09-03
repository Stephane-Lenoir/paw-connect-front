import Link from 'next/link';

export default function Filtres() {
  return (
    <>
      <div className="w-4/5 sm:w-1/6 bg-primary-color flex flex-col items-center sm:h-screen mt-5 mb-5 rounded-xl">
        <h3 className="text-2xl"> Filtres </h3>

        <div className="collapse collapse-arrow bg-primary-color">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">Âge</div>
          <div className="collapse-content bg-secondary-color">
            <label htmlFor="age-select" className="block mb-2 text-lg">
              Sélectionnez un âge :
            </label>
            <select id="age-select" className="p-2 rounded-lg bg-white">
              {/* Génère une option pour chaque âge entre 1 et 25 */}
              {[...Array(25)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1} ans
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-primary-color">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Sexe</div>
          <div className="collapse-content bg-secondary-color">
            <Link href="#">
              <p>Mâle</p>
            </Link>

            <Link href="">
              <p>Femelle </p>
            </Link>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-primary-color">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Espéces</div>
          <div className="collapse-content bg-secondary-color">
            <Link href="#">
              <p>Chats</p>
            </Link>

            <Link href="">
              <p>Chiens </p>
            </Link>

            <Link href="">
              <p>Autres</p>
            </Link>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-primary-color">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Races </div>
          <div className="collapse-content bg-secondary-color">
            {/* ici on boucle sur les races et on affiche leurs noms dans un simple "p"*/}
            <Link href="">
              <p>Chartreux</p>
            </Link>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-primary-color">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Disponibilité</div>
          <div className="collapse-content bg-secondary-color">
            <p> oui / non</p>
          </div>
        </div>
      </div>
    </>
  );
}
