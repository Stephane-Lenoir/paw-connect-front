import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100 bg-primary-color text-text-color">
        <div className="navbar-start text-3xl">
          <div className="dropdown text-3xl bg-primary-color">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-3xl"
            >
              <li>
                <Link href={'#'}>Adopter</Link>
              </li>
              <li>
                <Link href={'#'}>Localiser</Link>
              </li>
              <li>
                <Link href={'#'}>Dons</Link>
              </li>
              <li>
                <Link href={'#'}>Login</Link>
              </li>
            </ul>
          </div>
          <Link href={'#'} className="btn btn-ghost text-xl">
            Paw Connect
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-3xl">
            <li>
              <Link href={'#'}>Adopter</Link>
            </li>
            <li>
              <Link href={'#'}>Localisation</Link>
            </li>
            <li>
              <Link href={'#'}>Dons</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <ul className="menu menu-horizontal px-1 text-3xl">
          <li>
            <Link href={'#'}>Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
