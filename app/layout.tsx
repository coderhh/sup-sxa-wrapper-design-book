import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import * as FEAAS from "@sitecore-feaas/clientside/react";
import "./byoc";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SXA Wrapper for Design Book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FEAAS.ExternalComponentBundle />
        {children}
      </body>
    </html>
  );
}
