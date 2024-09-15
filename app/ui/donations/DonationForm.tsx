import React, { useState, useEffect } from 'react';
import { createDonation } from '../../services/Donations';
import { useAuth } from '../../context/authContext';

export default function DonationForm({ associations }) {
  const [formData, setFormData] = useState({
    amount: '',
    donorName: '',
    donorEmail: '',
    message: '',
    userId: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  
  const { isLogged, userConnected } = useAuth();

  useEffect(() => {
    if (isLogged && userConnected) {
      setFormData(prevState => ({
        ...prevState,
        donorName: userConnected.name,
        donorEmail: userConnected.email
      }));
    }
  }, [isLogged, userConnected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      console.log("Calling createDonation with:", formData);
      const result = await createDonation(formData);
      console.log("Donation result:", result);
      setSuccess('Donation enregistrée avec succès !');
      setModalMessage('Votre don a été enregistré. La possibilité de réaliser des paiements en ligne sera bientôt disponible. Merci de votre générosité !');
      setShowModal(true);
      // Réinitialiser le formulaire
      setFormData(prevState => ({
        ...prevState,
        amount: '',
        message: '',
        userId: ''
      }));
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      setError('Une erreur est survenue lors de l\'enregistrement de la donation.');
      setModalMessage('Désolé, une erreur est survenue lors de l\'enregistrement de votre don. Veuillez réessayer plus tard.');
      setShowModal(true);
    }
  };

  if (!isLogged) {
    return <p className="text-red-500">Veuillez vous connecter pour faire un don.</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Montant
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="number"
            placeholder="Montant en euros"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="donorName">
            Nom
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="donorName"
            type="text"
            placeholder="Votre nom"
            name="donorName"
            value={formData.donorName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="donorEmail">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="donorEmail"
            type="email"
            placeholder="Votre email"
            name="donorEmail"
            value={formData.donorEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message (optionnel)
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Votre message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
            Association
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez une association</option>
            {associations.map(association => (
              <option key={association.id} value={association.id}>
                {association.name}
              </option>
            ))}
          </select>
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        {success && <p className="text-green-500 text-xs italic">{success}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Faire un don
          </button>
        </div>
      </form>

      {/* Modal daisyUI */}
      <input type="checkbox" id="my-modal" className="modal-toggle" checked={showModal} onChange={() => setShowModal(false)} />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Information</h3>
          <p className="py-4">{modalMessage}</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn" onClick={() => setShowModal(false)}>Fermer</label>
          </div>
        </div>
      </div>
    </>
  );
}