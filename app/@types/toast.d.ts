export interface ToastContextType {
  showToast: boolean;
  toastMessageIndex: number | null;
  isSuccess: boolean;
  customMessage: string | null;
  showToastMessage: (index: number, success: boolean, customMsg?: string | null) => void;
}