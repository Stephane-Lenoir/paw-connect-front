'use client';

export default function AdoptionForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const response = await fetch('/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Données envoyées avec succès');
        // Réinitialiser le formulaire après la soumission réussie
        event.target.reset();
      } else {
        console.error("Une erreur est survenue lors de l'envoi des données");
      }
    } catch (error) {
      console.error("Une erreur est survenue lors de l'envoi des données :", error);
    }
  };

  return (
    <>
      <h2 className="text-center text-2xl p-2 font-bold">Formulaire d'hébergement</h2>
      <form className="m-2 flex flex-col gap-px items-center" onSubmit={handleSubmit}>
        <div className=" text-xl">
          <h3 className="p-2">Nom :</h3>
          <input type="text" placeholder="Nom" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="text-xl">
          <h3 className="p-2">Prénom :</h3>
          <input
            type="text"
            placeholder="Prénom"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="text-xl">
          <h3 className="p-2">Email :</h3>
          <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
        </div>

        <label className="form-control">
          <div className="label">
            <span className="label-text text-xl p-2">
              Indiquez vos expériences avec des animaux :
            </span>
          </div>
          <textarea
            placeholder="Entrez votre texte..."
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text text-xl p-2">
              Pouvez vous détailler l'environnement pour l'animal :
            </span>
          </div>
          <textarea
            placeholder="Entrez votre texte..."
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
        </label>

        <button
          type="submit"
          className="text-xl btn bg-primary-color hover:bg-secondary-color w-xl m-4"
        >
          Envoyer la demande
        </button>
      </form>
    </>
  );
}
