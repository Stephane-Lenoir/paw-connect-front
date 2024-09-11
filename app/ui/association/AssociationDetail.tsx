"use client";

import { useState, useEffect } from 'react';
import { getOneAssociation } from '../../services/Associations';

interface Association {
  id: string;
  name: string;
  // Ajoutez d'autres propriétés selon votre modèle d'association
}

interface AssociationDetailProps {
  params: {
    id: string;
  }
}

const AssociationDetail = ({ params }: AssociationDetailProps) => {
  const [association, setAssociation] = useState<Association | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssociation = async () => {
      try {
        const data = await getOneAssociation(params.id);
        setAssociation(data);
      } catch (error) {
        console.error("Error fetching association:", error);
        setError("Unable to fetch association details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAssociation();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!association) {
    return <div>Association not found</div>;
  }

  return (
    <div>
      <h1>{association.name}</h1>
      {/* Affichez ici les autres détails de l'association */}
    </div>
  );
};

export default AssociationDetail;