import Footer from './footer/Footer';
import Header from './header/Header';
import Homeimg from './homeimg/Homeimg';
import Modal from './loginModal/Modal';

export default function NeedLogin() {
  return (
    <>
      <Homeimg />
      <div className="text-center text-4xl m-8">
        <h1>Veuillez vous connecter pour accéder à cette page</h1>
        <div> Cliquez ici : </div>
        <div className="bg-secondary-color m-5 text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/5 block mx-auto  font-caveat">
          {' '}
          <Modal />{' '}
        </div>
      </div>
    </>
  );
}
