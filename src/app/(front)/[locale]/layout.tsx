import './style.css';

import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';

import { locales } from '@/lib/navigation';

import { Footer } from './_components/layout/Footer';
import { Header } from './_components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return {
    title: t('Metadata.title'),
    description: t('Metadata.title'),
  };
}

export default function FrontLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="flex h-screen flex-col">
          <Header />
          <main className="container mx-auto mb-20 flex-1 px-3">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
