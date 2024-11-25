
import { Caveat } from 'next/font/google';
import 'leaflet/dist/leaflet.css';
import { ToastProvider } from '../context/toastContext';
import Toast from '../ui/Toast';
import { AuthProvider } from '../context/authContext';
import { AnimalProvider } from '../context/animalContext';

const caveat = Caveat({ subsets: ['latin'] });

export const metadata = {
  title: 'Paw Connect',
  description: 'Refuge et famille d"accueil',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
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