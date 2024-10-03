import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Walmart 2.0 Clone',
  description: 'Welcome to Walmart',
  icons: {
    icon: '/walmart.svg',
  },
};
export const viewport: Viewport = {
  themeColor: '#0171DC',
};
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <div className='flex'>
          {modal}
          {children}
        </div>
      </body>
    </html>
  );
}
