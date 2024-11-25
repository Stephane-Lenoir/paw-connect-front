'use client';

import React, { useState, useEffect } from 'react';
import { createStripeSession } from '../../services/Donations';
import { useAuth } from '../../context/authContext';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { Association, DonationFormData } from '../../@types/donation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface DonationFormProps {
  associations: Association[];
}

export default function DonationForm({ associations }: DonationFormProps) {
  const [formData, setFormData] = useState<DonationFormData>({
    amount: '',
    donorName: '',
    donorEmail: '',
    message: '',
    userId: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const authContext = useAuth();
  const isLogged = authContext?.isLogged;
  const userConnected = authContext?.userConnected;
  const router = useRouter();

  useEffect(() => {
    if (isLogged && userConnected) {
      setFormData(prevState => ({
        ...prevState,
        donorName: userConnected.name,
        donorEmail: userConnected.email
      }));
    }
  }, [isLogged, userConnected]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError('');

    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe couldn't be loaded.");
      }

      const sessionId = await createStripeSession({
        amount: Number(formData.amount),
        userId: isLogged && userConnected ? userConnected.id.toString() : 'anonymous',
        donorName: formData.donorName,
        donorEmail: formData.donorEmail,
        message: formData.message,
        associationId: formData.userId
      });

      if (!sessionId) {
        throw new Error('Session Stripe non générée.');
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        setError(error.message || 'Une erreur est survenue lors de la redirection vers le paiement.');
      }
    } catch (err) {
      console.error('Error in handleSubmit:', err);
      setError('Une erreur est survenue lors de la préparation du paiement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
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
        {!isLogged && (
          <>
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
          </>
        )}
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
            {associations && associations.length > 0 ? associations.map(association => (
              <option key={association.id} value={association.id}>
                {association.name}
              </option>
            )) : <option disabled>Chargement des associations...</option>}
          </select>
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            className="font-bold bg-primary-color hover:bg-secondary-color transition-colors duration-300 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'En cours...' : 'Faire un don'}
          </button>
        </div>
      </form>
    </div>
  );
}
