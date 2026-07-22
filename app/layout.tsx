import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meetpranav.online"),

  title: {
    default: "Meet Pranav | Web Development Agency for Modern Businesses",
    template: "%s | Meet Pranav",
  },

  description:
    "Meet Pranav helps startups, creators, and businesses build premium websites, web apps, landing pages, dashboards, and digital experiences that convert visitors into customers.",

  keywords: [
    "Meet Pranav",
    "Pranav Singh",
    "Web Developer India",
    "Website Development",
    "Next.js Developer",
    "React Developer",
    "Business Website",
    "Landing Page Design",
    "UI UX",
    "Full Stack Developer",
    "Freelancer India",
    "Web Development Agency",
    "Website Design",
    "Modern Websites",
    "Portfolio Website",
    "Startup Website",
  ],

  authors: [
    {
      name: "Pranav Singh",
      url: "https://meetpranav.online",
    },
  ],

  creator: "Pranav Singh",

  publisher: "Pranav Singh",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Pranav Singh | Developer & Designer",

    description:
      "Helping businesses grow through modern websites, web apps, and digital experiences.",

    url: "https://meetpranav.online",

    siteName: "Meet Pranav",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meet Pranav",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Meet Pranav",

    description:
      "Premium websites & web apps for startups and businesses.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
       className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
