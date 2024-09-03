import Link from 'next/link';

export default function Rules() {
  return (
    <div className="relative flex items-center justify-center h-96 mt10 mx-8 md:mx-6 lg:mx-18 mt-6">
      {/* Image d'arrière-plan */}
      <img
        src="chien.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
      />

      {/* Conteneur de texte avec fond semi-transparent */}
      <div className="relative bg-white bg-opacity-70 p-8 rounded-lg">
        <Link
          href="https://www.service-public.fr/particuliers/vosdroits/F34877"
          passHref
          target="_blank"
        >
          <h1 className="text-center text-3xl mt-8 mb-8">Les règles d'adoption</h1>
        </Link>
      </div>
    </div>
  );
}
