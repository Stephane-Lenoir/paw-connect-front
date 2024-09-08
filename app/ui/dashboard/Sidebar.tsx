import Link from 'next/link';
import Profil from './Profil';

export default function Sidebar() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          {/* Page content here */}
          <Profil />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-2xl text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link href={'#'}>Mon profil</Link>
            </li>
            <li>
              <Link href={'#'}>Gestion des animaux</Link>
            </li>

            <li>
              <Link href={'#'}>Historique de navigation</Link>
            </li>

            <li>
              <Link href={'#'}>Messages</Link>
            </li>

            <label
              htmlFor="my-drawer-2"
              className="btn bg-primary-color hover:bg-secondary-color drawer-button lg:hidden mb-8"
            >
              Fermer
            </label>
          </ul>
        </div>
      </div>
    </>
  );
}
