import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getDictionary } from "./dictionaries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COLAB",
  description: "Game site for team buiding games",
};

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <html lang={lang}>
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
