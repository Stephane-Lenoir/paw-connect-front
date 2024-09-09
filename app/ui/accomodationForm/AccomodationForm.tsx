import Header from '../header/Header';

export default function AccomodationForm() {
  return (
    <>
      <h2 className="text-center text-2xl p-4 font-bold">Formulaire d'hébergement</h2>

      <form className="m-2 flex flex-col gap-px ">
        <div className="p-3 text-xl">
          <h3>Nom :</h3>
          <input type="text" placeholder="Nom" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="p-3 text-xl">
          <h3>Prénom :</h3>
          <input
            type="text"
            placeholder="Prénom"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="p-3 text-xl">
          <h3>Email :</h3>
          <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
        </div>

        <label className="form-control p-3">
          <div className="label">
            <span className="label-text text-xl">Indiquez vos expériences avec des animaux :</span>
          </div>
          <textarea
            placeholder="Entrez votre texte..."
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
          <div className="label"></div>
        </label>
        <label className="form-control p-3">
          <div className="label">
            <span className="label-text text-xl">
              Pouvez vous détailler l'environnement pour l'animal :
            </span>
          </div>
          <textarea
            placeholder="Entrez votre texte..."
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
          <div className="label"></div>
        </label>

        <button
          type="submit"
          className="text-xl btn bg-primary-color hover:bg-secondary-color w-full"
        >
          Envoyer la demande
        </button>
      </form>
    </>
  );
}
