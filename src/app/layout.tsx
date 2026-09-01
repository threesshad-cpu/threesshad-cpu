import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Threessha D | AI & ML Engineer",
  description: "Portfolio of Threessha D, an AI, Machine Learning, and Generative AI Engineer building intelligent systems and production-minded software.",
  keywords: ["AI Engineer", "Machine Learning Engineer", "Software Engineer", "Generative AI", "Full-Stack AI", "Threessha D"],
  authors: [{ name: "Threessha D" }],
  openGraph: {
    title: "Threessha D | AI & ML Engineer",
    description: "Building intelligent systems and production-minded software.",
    url: "https://threessha.dev", // Using placeholder for now
    siteName: "Threessha D Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased dark scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-accent-1/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
