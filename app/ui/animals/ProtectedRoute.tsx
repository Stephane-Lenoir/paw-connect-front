'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '../loader';

export default function ProtectedRoute({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('jwt_token');
      if (!token) {
        router.push('/animals');
      } else {
        setIsLogged(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return <Loader />; // ou un spinner, ou une page de chargement
  }

  return isLogged ? children : null;
}
