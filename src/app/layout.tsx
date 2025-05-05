import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../app/header";
import AuthListener from "./_auth-listener";
import "flowbite";
import ReduxProvider from "../app/store/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shoplivo",
  description:
    "Shoplivo – Affordable Online Shopping for Electronics, Fashion, Home & More",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <AuthListener />
          <Header></Header>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
