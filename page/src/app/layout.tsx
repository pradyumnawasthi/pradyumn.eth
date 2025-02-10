import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pradyumn Wasthi | Symbiotic Inc",
  description: "Co-founder of Symbiotic Inc - Building intelligent systems that augment human cognition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
