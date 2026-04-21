import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarCursor from "../components/StarCursor";
import { Toaster } from "react-hot-toast";
import NavBar from "@/components/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Truce Lofficiel",
  description: "Created by Alan Grissette. Directed by Tracy Pendleton.",
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
        <Toaster position="top-right" />
        <StarCursor />

        {/* Wrap the React children tree in Suspense */}
        <Suspense fallback={<div className="h-[100dvh] flex items-center justify-center text-white">Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}