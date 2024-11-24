import { ToastProvider } from './context/toastContext';
import '@/app/globals.css';
import { Caveat } from 'next/font/google';
import Toast from './ui/Toast';
import { AuthProvider } from './context/authContext';
import 'leaflet/dist/leaflet.css';
import { AnimalProvider } from './context/animalContext';
import type { Metadata } from 'next';

const caveat = Caveat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paw Connect',
  description: 'Refuge et famille d"accueil',
};

type RootLayoutProps = {
  children: React.ReactNode;
  types?: string;
};

export default async function RootLayout({ children, types = 'default' }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className={caveat.className}>
        <AuthProvider>
          <ToastProvider>
            <AnimalProvider>
              {children}
              <Toast />
            </AnimalProvider>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}