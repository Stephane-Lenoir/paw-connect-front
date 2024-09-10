import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAssociationById } from '../../services/Associations';

const AssociationDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [association, setAssociation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getAssociationById(id as string)
        .then(data => {
          setAssociation(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Failed to fetch association details:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!association) return <div>Association not found</div>;

  return (
    <div>
      <h1>{association.name}</h1>
      <p>Email: {association.email}</p>
      {/* Affichez ici d'autres détails comme les demandes ou les animaux si nécessaire */}
    </div>
  );
};

export default AssociationDetail;
