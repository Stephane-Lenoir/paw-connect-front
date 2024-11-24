export interface ImgProps {
    photo: string;
    isOpen?: boolean;
  }

  export interface ProtectedRouteProps {
    children: React.ReactNode;
}

export interface FiltresProps {
  onReload: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  animal: Animal;
}

export interface RefugeProps {
  refuge: string;
}

export interface TitleProps {
  name: string;
  gender: string;
}