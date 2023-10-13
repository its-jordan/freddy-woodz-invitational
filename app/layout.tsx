import { Analytics } from '@vercel/analytics/react';
import Nav from '@/components/nav';
import './globals.css';
import type { Metadata } from 'next';
import { Exo } from 'next/font/google';

const APP_NAME = 'Freddy Woodz Invitational';
const APP_DEFAULT_TITLE = 'Freddy Woodz Invitational';
const APP_TITLE_TEMPLATE = '%s - Freddy Woodz Invitational';
const APP_DESCRIPTION =
  'Team information for Freddy Woodz Invitational Pokemon Showdown Tournament';

const font = Exo({
  weight: ['100', '200', '300', '400', '600', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  themeColor: '#121212',
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
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
      <body className={`${font.className} light-mode`}>
        <Nav />
        <div className='content-container'>{children}</div>
        <Analytics mode='production' />
      </body>
    </html>
  );
}
