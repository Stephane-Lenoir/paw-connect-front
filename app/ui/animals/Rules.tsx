import Link from 'next/link';

export default function Rules() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="hero h-96 mt-8 mb-8 w-11/12 align-middle"
        style={{
          backgroundImage: 'url(/chien.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="relative  p-8 rounded-lg">
            <Link
              href="https://www.service-public.fr/particuliers/vosdroits/F34877"
              passHref
              target="_blank"
            >
              <h1 className="text-center text-5xl mt-8 mb-8">Les règles d'adoption</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative flex items-center justify-center h-96 mt10 mx-8 md:mx-6 lg:mx-18 mt-6">
    //   {/* Image d'arrière-plan */}
    //   <img
    //     src="chien.jpg"
    //     alt="Background"
    //     className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-xl"
    //   />

    //   {/* Conteneur de texte avec fond semi-transparent */}
    //   <div className="relative bg-white bg-opacity-70 p-8 rounded-lg">
    //     <Link
    //       href="https://www.service-public.fr/particuliers/vosdroits/F34877"
    //       passHref
    //       target="_blank"
    //     >
    //       <h1 className="text-center text-3xl mt-8 mb-8">Les règles d'adoption</h1>
    //     </Link>
    //   </div>
    // </div>
  );
}
