'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '../loader';
import { useAuth } from '../../context/authContext'; // Assurez-vous d'importer votre contexte d'authentification

export default function ProtectedRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const { isLogged, setIsLogged } = useAuth(); // Utilisez le contexte d'authentification
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('jwt_token');
      if (!token) {
        setIsLogged(false);
        router.push('/login'); // Redirigez vers la page de connexion
      } else {
        setIsLogged(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router, setIsLogged]);

  if (isLoading) {
    return <Loader />; // ou un spinner, ou une page de chargement
  }

  return isLogged ? children : null;
}
