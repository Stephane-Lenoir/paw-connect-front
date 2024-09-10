"use client";

import { useState, useEffect } from 'react';  // Ajoute cet import
import CardImage from './CardImage';
import MailtoButton from './MailtoButton';
import TitleAssociation from './TitleAssociation';
import { getAllAssociations } from '../../services/Associations';  // Ajoute également cet import pour récupérer les associations

interface Association {
  id: number;
  name: string;
  email: string;
}

export default function AssociationCard() {
  const [associations, setAssociations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAssociations() {
      try {
        const data = await getAllAssociations();
        setAssociations(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des associations:', error);
        setLoading(false);
      }
    }

    fetchAssociations();
  }, []);

  if (loading) {
    return <div>Chargement des associations...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-10 m-8">
      {associations.map((association) => (
        <div
          key={association.id}
          className="w-auto sm:w-auto md:w-auto lg:w-auto bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out text-lg"
        >
          <CardImage />

          <div className="p-4 text-center">
            <TitleAssociation title={association.name} />
            <MailtoButton email={association.email} />
          </div>
        </div>
      ))}
    </div>
  );
}
