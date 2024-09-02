import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="footer bg-base-100 text-text-color  ">
        <footer className="footer bg-primary-color text-text-color p-10 text-lg">
          <nav className="">
            <h6 className="footer-title">Crédits</h6>
            <Link href={'#'} className="link link-hover">
              Stéphane
            </Link>
            <Link href={'#'} className="link link-hover">
              Matthieu
            </Link>
            <Link href={'#'} className="link link-hover">
              Julien
            </Link>
            <Link href={'#'} className="link link-hover">
              Dylan
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <Link href={'#'} className="link link-hover">
              A propos
            </Link>
            <Link href={'#'} className="link link-hover">
              Contact
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Liens</h6>
            <Link href={'#'} className="link link-hover">
              Accueil
            </Link>
            <Link href={'#'} className="link link-hover">
              Adopter
            </Link>

            <Link href={'#'} className="link link-hover">
              Localiser
            </Link>
            <Link href={'#'} className="link link-hover">
              Dons
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <Link href={'#'} className="link link-hover">
              Terms of use
            </Link>
            <Link href={'#'} className="link link-hover">
              Privacy policy
            </Link>
            <Link href={'#'} className="link link-hover">
              Cookie policy
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
