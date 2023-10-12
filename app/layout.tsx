import { Analytics } from '@vercel/analytics/react';
import Nav from '@/components/nav';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const APP_NAME = 'Freddy Woodz Invitational';
const APP_DEFAULT_TITLE = 'Freddy Woodz Invitational';
const APP_TITLE_TEMPLATE = '%s - Freddy Woodz Invitational';
const APP_DESCRIPTION =
  'Team information for Freddy Woodz Invitational Pokemon Showdown Tournament';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  themeColor: '#FFFFFF',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
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
        <Analytics mode='production' />
      </body>
    </html>
  );
}
