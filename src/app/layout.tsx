import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry"; // Path to registry component
import Navbar from "@/components/Navbar"; // Path to Navbar component
import "./globals.css";

// Use Geist fonts as requested
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TextClip App",
  description: "Capture and recognize text effortlessly on macOS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply Geist font variables and remove the default margin style that was in the Inter version */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Wrap everything in the StyledComponentsRegistry for server-side rendering support */}
        <StyledComponentsRegistry>
          <Navbar /> {/* Render Navbar on all pages */}
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}