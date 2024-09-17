'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { checkSessionStatus } from '../services/Donations';

export default function DonationSuccessPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [donationDetails, setDonationDetails] = useState(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      checkSessionStatus(sessionId)
        .then((data) => {
          setStatus('success');
          setDonationDetails(data.donation);
        })
        .catch((error) => {
          console.error('Error checking session status:', error);
          setStatus('error');
        });
    } else {
      setStatus('error');
    }
  }, [searchParams]);

  const handleReturnHome = () => {
    router.push('/');
  };

  if (status === 'loading') {
    return <div>Vérification de votre donation...</div>;
  }

  if (status === 'error') {
    return (
      <div>
        <div>Une erreur est survenue lors de la vérification de votre donation.</div>
        <button onClick={handleReturnHome} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Merci pour votre donation !</h1>
      <p>Votre paiement a été traité avec succès.</p>
      {donationDetails && (
        <div>
          <p>Montant : {donationDetails.amount} €</p>
          <p>Association : {donationDetails.associationName}</p>
          {/* Ajoutez d'autres détails si nécessaire */}
        </div>
      )}
      <button onClick={handleReturnHome} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Retour à l'accueil
      </button>
    </div>
  );
}