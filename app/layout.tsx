import Nav from '@/components/nav';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Freddy Woodz Invitational',
  description:
    'Team information for Freddy Woodz Invitational Pokemon Showdown Tournament',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nav />
        <div className='content-container'>{children}</div>
      </body>
    </html>
  );
}
