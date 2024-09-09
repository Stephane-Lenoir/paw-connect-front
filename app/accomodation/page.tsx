import Footer from '../ui/footer/Footer';
import Header from '../ui/header/Header';
import AccomodationForm from '../ui/accomodationForm/AccomodationForm';
import ProtectedRoute from '../ui/animals/ProtectedRoute';

export default function Accomodation() {
  return (
    <ProtectedRoute>
      <>
        <Header />
        <AccomodationForm />
        <Footer />
      </>
    </ProtectedRoute>
  );
}
