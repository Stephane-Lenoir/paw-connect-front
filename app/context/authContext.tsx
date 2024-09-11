'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { getUserByToken } from '../services/Users';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  //!TODO : Why localStorage isn't defined ?
  const [userConnected, setUserConnected] = useState(() => {
    const savedUser = localStorage.getItem('userConnected');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('jwt_token');
      if (token) {
        setIsLogged(true);
        console.log('UE Context');
        if (!userConnected) {
          try {
            console.log('TryUserByToken');
            const user = await getUserByToken(token);
            setUserConnected(user);
            localStorage.setItem('userConnected', JSON.stringify(userConnected));
          } catch (error) {
            console.log(error);
            throw error;
          }
        }
      }
    };
    fetchUser();
  }, [userConnected]);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, userConnected, setUserConnected }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
