import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AICTE × VITC IDEA Lab | Vellore Institute of Technology Chennai",
  description:
    "Official portal for the AICTE IDEA Lab at Vellore Institute of Technology Chennai. State-of-the-art multidisciplinary prototyping, 3D printing, CNC milling, PCB fabrication, and IoT robotics innovation sanctuary.",
  keywords: [
    "AICTE IDEA Lab",
    "VIT Chennai",
    "VITC IDEA Lab",
    "Vellore Institute of Technology",
    "Prototyping Laboratory",
    "3D Printing VIT",
    "CNC Machining Chennai",
    "Engineering Innovation Lab"
  ],
  authors: [{ name: "VIT Chennai & AICTE" }],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#003b71",
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
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#003b71] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
