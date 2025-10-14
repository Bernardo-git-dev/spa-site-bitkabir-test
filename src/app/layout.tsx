import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
});

const glitten = localFont({
  src: "../../public/font/Glitten-Regular.otf",
  variable: "--font-glitten",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minha Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={glitten.variable}>{children}</body>
    </html>
  );
}
