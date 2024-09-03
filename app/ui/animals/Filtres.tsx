export default function Filtres() {
  return (
    <>
      <div className="w-4/5 sm:w-1/6 bg-primary-color flex flex-col items-center sm:h-screen mt-5 mb-5 rounded-xl">
        <h3 className="text-2xl"> Filtres </h3>

        <div className="collapse collapse-arrow bg-primary-color">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">Age</div>
          <div className="collapse-content bg-secondary-color">
            <p>entre 1 et 10</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-primary-color">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Sexe</div>
          <div className="collapse-content bg-secondary-color">
            <p>Mâle</p>
            <p>Femelle</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-primary-color">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Espéces</div>
          <div className="collapse-content bg-secondary-color">
            <p>Mâle</p>
            <p>Femelle</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-primary-color">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Races </div>
          <div className="collapse-content bg-secondary-color">
            <p>races</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-primary-color">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Localisation</div>
          <div className="collapse-content bg-secondary-color">
            <p>Code postal</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-primary-color">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Disponibilité</div>
          <div className="collapse-content bg-secondary-color">
            <p>oui / non</p>
          </div>
        </div>
      </div>
    </>
  );
}
