import Footer from '../ui/footer/Footer';
import Header from '../ui/header/Header';
import AdoptionForm from '../ui/adoptionForm/AdoptionForm';
import ProtectedRoute from '../ui/animals/ProtectedRoute';

export default function Adoption() {
  return (
    <>
      <ProtectedRoute>
        <Header />
        <AdoptionForm />
        <Footer />
      </ProtectedRoute>
    </>
  );
}
