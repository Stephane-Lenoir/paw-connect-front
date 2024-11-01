import NavBar from "../../ui/header/Navbar";


const AnimalPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <NavBar />

      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Animal Name */}
        <h1 className="text-4xl font-bold mb-8">Nom de l'animal</h1>

        {/* Animal Image */}
        <img src="/image" alt="Animal" className="w-80 h-80 object-cover rounded-lg mb-8" />

        {/* Animal Description */}
        <p className="text-lg mb-12">Description Animal</p>

        {/* Actions */}
        <div className="flex space-x-4">
          <button className="bg-secondary-color text-white px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/2 block mx-auto text-base font-caveat">
            Héberger
          </button>
          <button className="bg-secondary-color text-white px-4 py-2 rounded-full mt-4 hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/2 block mx-auto text-base font-caveat">
            Adopter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalPage;
