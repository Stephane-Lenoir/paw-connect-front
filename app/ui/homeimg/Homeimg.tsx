export default function Homeimg() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div
          className="hero h-96 mt-8 mb-8 w-11/12 align-middle"
          style={{
            backgroundImage: 'url(/chien.jpg)',
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold">Paw Connect</h1>
              <p className="mb-5 text-3xl">
                Bienvenue sur Paw Connect, l'application qui rapproche les refuges et les familles
                d'accueil pour offrir un foyer temporaire et aimant aux animaux dans le besoin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
