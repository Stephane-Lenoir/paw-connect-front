export interface User {
  id: number;
  name: string;
  firstname: string;
  email: string;
  role_id: number;
}

export interface AuthContextType {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  userConnected: User | null;
  setUserConnected: (user: User | null) => void;
  handleLogout: () => void;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  expirationTime: number;
}






