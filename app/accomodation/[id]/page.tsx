import Footer from '../../ui/footer/Footer';
import Header from '../../ui/header/Header';
import AccomodationForm from '../../ui/accomodationForm/AccomodationForm';
import ProtectedRoute from '../../ui/animals/ProtectedRoute';
import { AnimalProvider } from '../../context/animalContext';

export default function Accomodation() {
  return (
    <ProtectedRoute>
      <AnimalProvider>
        <Header />
        <AccomodationForm />
        <Footer />
      </AnimalProvider>
    </ProtectedRoute>
  );
}
