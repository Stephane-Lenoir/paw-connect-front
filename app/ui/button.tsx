import Link from 'next/link';

export default function Button() {
  return (
    <>
      <div className="flex justify-center">
        <Link
          href={'#'}
          className="flex justify-center justify-center bg-primary-color text-white text-3xl px-4 py-2 rounded-full m-8 hover:bg-secondary-color transition-colors duration-300 ease-in-out w-52 font-caveat"
        >
          Tout afficher
        </Link>
      </div>
    </>
  );
}
