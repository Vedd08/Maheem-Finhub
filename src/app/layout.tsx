import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  weight: ['500', '600', '700', '800'],
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maheem Finhub | Premium Financial Solutions",
  description: "Empowering your future with smart financial solutions. Home Loan, Mutual Funds, Mortgage Loan, Term Plan in Surat.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jakarta.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <SmoothScroll>
          <ScrollProgressBar />
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
