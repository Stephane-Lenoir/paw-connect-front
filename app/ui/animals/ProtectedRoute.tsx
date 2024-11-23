'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '../loader';
import { useAuth } from '../../context/authContext';
import { ProtectedRouteProps } from '../../@types/props';
import { AuthContextType } from '../../@types/auth';

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { isLogged, setIsLogged } = useAuth() as AuthContextType;
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('jwt_token');
      if (!token) {
        setIsLogged(false);
        router.push('/login');
      } else {
        setIsLogged(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router, setIsLogged]);

  if (isLoading) {
    return <Loader />;
  }

  return isLogged ? children : null;
}
