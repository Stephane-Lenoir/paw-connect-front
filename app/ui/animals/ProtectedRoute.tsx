'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // function for check if user is logged
    const checkAuth = () => {
      const token = localStorage.getItem('jwt_token');
      if (!token) {
        router.push('/animals');
      } else {
        setIsLogged(true);
      }
    };
    // check if user is logged when component is mounted
    checkAuth();
  }, [router]); // add router to dependencies

  return <>{children}</>;
}
