import type { Metadata } from 'next';

import './globals.css';

import { Caveat } from 'next/font/google';

const caveat = Caveat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paw Connect',
  description: 'Refuge et famille d"accueil',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={caveat.className}>{children}</body>
    </html>
  );
}
