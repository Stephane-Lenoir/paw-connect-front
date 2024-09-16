'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessageIndex, setToastMessageIndex] = useState(null);
  const [isSuccess, setIsSuccess] = useState(true);

  const showToastMessage = useCallback((messageIndex, success) => {
    setToastMessageIndex(messageIndex);
    setIsSuccess(success);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Le toast disparaîtra après 3 secondes
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, toastMessageIndex, isSuccess, showToastMessage }}>
      {children}
    </ToastContext.Provider>
  );
};
