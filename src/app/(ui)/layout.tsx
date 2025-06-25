"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useGetQueryClient } from "@/hooks/query/useGetQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = useGetQueryClient();

  useEffect(() => {
    document.title = "MusicGPT";
  }, []);


  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
