import Link from 'next/link';

export default function Filter() {
  return (
    <>
      <div className="bg-primary-color flex flex-col items-center mt-5 mb-5 rounded-xl">
        <h3 className="text-2xl mt-3">Filtres</h3>

        <div className="collapse collapse-arrow bg-primary-color">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium text-center p-0 mt-5">
            Recherche de refuge par ville
          </div>
          <div className="collapse-content bg-secondary-color text-center p-3">
            <Link href="#">
              <p>Paris</p>
            </Link>
            <Link href="#">
              <p>Lyon</p>
            </Link>
            <Link href="#">
              <p>Toulouse</p>
            </Link>
            <Link href="#">
              <p>Bordeaux</p>
            </Link>
            <Link href="#">
              <p>Marseille</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
