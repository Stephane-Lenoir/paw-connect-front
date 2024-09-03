export default function Filtres() {
  return (
    <>
      <div className="w-1/5 bg-primary-color">
        <h3 className=""> Filtres </h3>

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
          <div className="collapse-title text-xl font-medium">Localisation</div>
          <div className="collapse-content bg-secondary-color">
            <p>Code postal</p>
          </div>
        </div>
      </div>
    </>
  );
}
