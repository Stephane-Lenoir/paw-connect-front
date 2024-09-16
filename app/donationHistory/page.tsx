import React from 'react';
import DonationHistory from '../ui/donations/DonationHistory';
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/router';

export default function DonationHistoryPage() {
  const { isLogged } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isLogged) {
      router.push('/login'); // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    }
  }, [isLogged, router]);

  if (!isLogged) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Historique des Donations</h1>
      <DonationHistory />
    </div>
  );
}