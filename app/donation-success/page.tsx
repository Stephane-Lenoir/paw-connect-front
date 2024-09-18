'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { checkSessionStatus } from '../services/Donations';
import NavBar from '../ui/header/Navbar';
import Footer from '../ui/footer/Footer';

export default function DonationSuccessPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [donationDetails, setDonationDetails] = useState(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId && status === 'loading') {
      checkSessionStatus(sessionId)
        .then((data) => {
          setStatus('success');
          setDonationDetails(data.donation);
        })
        .catch((error) => {
          console.error('Error checking session status:', error);
          setStatus('error');
        });
    } else if (!sessionId) {
      setStatus('error');
    }
  }, [searchParams, status]);

  const handleReturnHome = () => {
    router.push('/');
  };

  if (status === 'loading') {
    return <div>Vérification de votre donation...</div>;
  }

  if (status === 'error') {
    return (
      <div>
        <NavBar />
        <div>Une erreur est survenue lors de la vérification de votre donation.</div>
        <button onClick={handleReturnHome} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Retour à l'accueil
        </button>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1 className='mb-5 mt-5 pl-16'>Merci pour votre donation !</h1>
      <p className='pl-16'>Votre paiement a été traité avec succès.</p>
      {donationDetails && (
        <div>
          <p>Montant : {donationDetails.amount} €</p>
          <p>Association : {donationDetails.associationName}</p>
          {/* Ajoutez d'autres détails si nécessaire */}
        </div>
      )}
      <button onClick={handleReturnHome} className="mb-12 ml-16 mt-4 bg-primary-color hover:bg-secondary-color transition-colors duration-300 text-white font-bold py-2 px-4 rounded">
        Retour à l'accueil
      </button>
      <Footer />
    </div>
  );
}