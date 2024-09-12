import Link from 'next/link';

export default function Filtres() {
  return (
    <>
      <div className="w-4/5 sm:w-1/6 md:w-4/5 lg:w-1/6 bg-background-color flex flex-col items-center min-h-screen mt-5 mb-5 rounded-xl">
        {' '}
        <h3 className="text-center text-3xl mt-6 mb-6"> Filtres </h3>
        <div className="collapse collapse-arrow bg-background-color ">
          <input type="checkbox" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium ">Âge</div>
          <div className="collapse-content bg-secondary-color">
            <label htmlFor="age-range" className="block mb-2 text-lg">
              Sélectionnez un âge :
            </label>
            <input
              type="range"
              id="age-range"
              min="1"
              max="25"
              defaultValue="1"
              className="range"
              step="1"
            />
            <div className="flex w-full justify-between px-2 text-xs">
              {[...Array(25)].map((_, index) => (
                <span key={index + 1}>{index + 1}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-background-color">
          <input type="checkbox" name="my-accordion-2" />
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
        <div className="collapse collapse-arrow bg-background-color">
          <input type="checkbox" name="my-accordion-2" />
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
        <div className="collapse collapse-arrow bg-background-color">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Races </div>
          <div className="collapse-content bg-secondary-color">
            {/* ici on boucle sur les races et on affiche leurs noms dans un simple "p"*/}
            <Link href="">
              <p>Chartreux</p>
            </Link>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-background-color">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Disponibilité</div>
          <div className="collapse-content bg-secondary-color">
            <p> oui / non</p>
          </div>
        </div>
      </div>
    </>
  );
}
