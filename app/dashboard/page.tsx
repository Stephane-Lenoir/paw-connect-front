import ProtectedRoute from '../ui/animals/ProtectedRoute';
import Dashboard from '../ui/dashboard/Dashboard';
import Footer from '../ui/footer/Footer';
import Header from '../ui/header/Header';

export default function dashboardPage() {
  return (
    <>
      <ProtectedRoute>
        <Header />
        <Dashboard />
        <Footer />
      </ProtectedRoute>
    </>
  );
}