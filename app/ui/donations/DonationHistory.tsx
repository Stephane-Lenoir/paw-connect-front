import React, { useState, useEffect } from 'react';
import { getDonationsByUser } from '../../services/Donations';

export default function DonationHistory() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const data = await getDonationsByUser();
        setDonations(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching donations:", err);
        setError("Une erreur est survenue lors de la récupération de l'historique des dons.");
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  if (loading) return <p>Chargement de l'historique des dons...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Historique des dons</h2>
      {donations.length === 0 ? (
        <p>Vous n'avez pas encore fait de dons.</p>
      ) : (
        <ul>
          {donations.map(donation => (
            <li key={donation.id} className="mb-2">
              {donation.amount}€ à {donation.associationName} le {new Date(donation.createdAt).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}