import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const unrbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Yohan Garcia",
  description: "Landing Page made by Yohan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={unrbanist.className}>
        <Navbar />
        <Header />
        {children}</body>
    </html>
  );
}
