import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="footer bg-base-100 text-text-color  ">
        <footer className="footer bg-primary-color text-text-color p-10 text-lg justify-evenly">
          <nav className="">
            <h6 className="footer-title">Crédits</h6>
            <Link href={'https://www.linkedin.com/in/st%C3%A9phane-lenoir-dev77/'} className="link link-hover" target="_blank">
              Stéphane
            </Link>
            <Link href={'https://www.linkedin.com/in/matthieu-rault-dev/'} className="link link-hover" target="_blank">
              Matthieu
            </Link>
            <Link href={'https://www.linkedin.com/in/paulus--julien/'} className="link link-hover" target="_blank">
              Julien
            </Link>
            <Link href={'https://www.linkedin.com/in/dylan-gavaud/'} className="link link-hover" target="_blank">
              Dylan
            </Link>
            <Link href={'https://www.linkedin.com/in/fabien-bourdais/'} className="link link-hover" target="_blank">
              Fabien
            </Link>
          </nav>

          <nav>
            <h6 className="footer-title">Liens</h6>
            <Link href={'/'} className="link link-hover">
              Accueil
            </Link>
            <Link href={'/animals'} className="link link-hover">
              Adopter
            </Link>

            <Link href={'/location'} className="link link-hover">
              Localiser
            </Link>
            <Link href={'#'} className="link link-hover">
              Dons
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <Link href={'/terms'} className="link link-hover">
             Conditions d'utilisation
            </Link>
            <Link href={'#'} className="link link-hover">
              Politique de confidentialité
            </Link>
            <Link href={'#'} className="link link-hover">
              Politique de cookies
            </Link>
          </nav>

          <nav>
            <h6 className="footer-title">Company</h6>
            <Link href={'/about'} className="link link-hover">
              A propos
            </Link>
            <Link href={'mailto:pawconnect@gamil.com'} className="link link-hover" target="_blank">
              Contact
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
