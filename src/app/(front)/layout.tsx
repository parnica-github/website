import "./style.css";

import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { Footer } from "./_components/layout/Footer";
import { Header } from "./_components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export default function FrontLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
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
