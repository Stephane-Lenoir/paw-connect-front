import Footer from '../ui/footer/Footer';
import Header from '../ui/header/Header';
import Homeimg from '../ui/homeimg/Homeimg';
import Modal from '../ui/loginModal/Modal';

export default function Login() {
  return (
    <>
      <Header />
      <Homeimg />
      <div className="text-center text-4xl m-8">
        <h1>Veuillez vous connecter pour accéder à cette page</h1>
        <div> Cliquez ici : </div>
        <button
          type="button"
          className="bg-secondary-color m-5 text-white px-4 py-2 rounded-full hover:bg-primary-color transition-colors duration-300 ease-in-out w-1/5 block mx-auto  font-caveat"
        >
          {' '}
          <Modal />{' '}
        </button>
      </div>

      <Footer />
    </>
  );
}
