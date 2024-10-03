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
  description:
    "Welcome to Walmart, a robust e-commerce platform mimicking the experience of one of the world's largest retailers. This project showcases cutting-edge technology to create a fully functional, scalable, and fast platform for users to browse and shop.",
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
