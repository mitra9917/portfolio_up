import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Mitra - Frontend Developer & UI/UX Designer",
  description: "Portfolio of Shubham Mitra, a passionate frontend developer and UI/UX designer specializing in React, JavaScript, and modern web technologies.",
  keywords: ["portfolio", "frontend developer", "UI/UX designer", "React", "JavaScript", "web development"],
  authors: [{ name: "Shubham Mitra" }],
  openGraph: {
    title: "Shubham Mitra - Frontend Developer & UI/UX Designer",
    description: "Portfolio of Shubham Mitra, a passionate frontend developer and UI/UX designer.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}