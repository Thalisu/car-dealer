import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { poppins } from "./lib/fonts";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-svw flex justify-center`}
      >
        <div className="max-w-max flex w-full min-h-svh flex-col gap-10">
          <header className="p-4 flex justify-between w-full items-center h-fit">
            <h1 className={`${poppins.className} text-4xl`}>Car dealer App</h1>
            <nav className="flex gap-2">
              <Link href="/" className="hover:scale-105 transition-all">
                Home
              </Link>
              <Link href="/cars" className="hover:scale-105 transition-all">
                Cars
              </Link>
              <Link href="/about" className="hover:scale-105 transition-all">
                About
              </Link>
              <Link href="/contact" className="hover:scale-105 transition-all">
                Contact
              </Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
