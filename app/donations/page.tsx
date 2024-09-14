'use client';

import { useState, useEffect } from 'react';
import DonationForm from '../ui/donations/DonationForm';
import AssociationList from '../ui/donations/AssociationList';
import { getAllAssociations } from '../services/Associations';
import NavBar from '../ui/header/Navbar';
import Footer from '../ui/footer/Footer';

export default function DonationsPage() {
  const [associations, setAssociations] = useState([]);

  useEffect(() => {
    const fetchAssociations = async () => {
      const data = await getAllAssociations();
      setAssociations(data);
    };
    fetchAssociations();
  }, []);

  return (
    
    <div>
      <NavBar />
      <h1 className="text-3xl font-bold mb-8">Faire un don</h1>
      <div className="grid md:grid-cols-2 gap-8">        
        <AssociationList associations={associations} />
        <DonationForm associations={associations} />
      </div>
      <Footer />
    </div>
  );
}