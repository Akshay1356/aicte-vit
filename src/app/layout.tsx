import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VITC IDEA Lab | AICTE × VITC Innovation & Prototyping Center",
  description:
    "AICTE IDEA Lab at Vellore Institute of Technology Chennai - Where your dream projects turn into reality. State-of-the-art 3D printing, CNC machining, PCB prototyping, IoT, and robotics facilities.",
  keywords: [
    "AICTE IDEA Lab",
    "VIT Chennai",
    "VITC",
    "Innovation Lab",
    "Rapid Prototyping",
    "3D Printing Chennai",
    "Engineering Projects",
    "CNC Machining",
    "IoT Labs"
  ],
  authors: [{ name: "VIT Chennai & AICTE" }],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
