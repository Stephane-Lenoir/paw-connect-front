'use client';

import { createContext, useContext, useState } from 'react';
import { ToastContextType } from '../@types/toast';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessageIndex, setToastMessageIndex] = useState<number | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [customMessage, setCustomMessage] = useState<string | null>(null);

  const showToastMessage = (index: number, success: boolean, customMsg: string | null = null) => {
    setToastMessageIndex(index);
    setIsSuccess(success);
    setCustomMessage(customMsg);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      setCustomMessage(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider
      value={{ showToast, toastMessageIndex, isSuccess, customMessage, showToastMessage }}
    >
      {children}
    </ToastContext.Provider>
  );
};
