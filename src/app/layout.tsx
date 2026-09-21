import {
  Caesar_Dressing,
  Fascinate_Inline,
  Flavors,
  Geist,
  Google_Sans_Flex,
  Londrina_Sketch,
  Protest_Revolution,
  Rubik_Burned,
  Sedgwick_Ave_Display,
} from "next/font/google";

import type { Metadata } from "next";

import { Cursor } from "@/components/cursor";
import { defaultSEO } from "@/config/seo-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const googleSansFlex = Google_Sans_Flex({
  weight: "variable",
  variable: "--font-google-sans-flex-variable",
  subsets: ["latin"],
});

const rubikBurned = Rubik_Burned({
  weight: "400",
  variable: "--font-google-rubik-burned",
  subsets: ["latin"],
});

const londrinaSketch = Londrina_Sketch({
  weight: "400",
  variable: "--font-google-londrina-sketch",
  subsets: ["latin"],
});

const fascinateInline = Fascinate_Inline({
  weight: "400",
  variable: "--font-google-fascinate-inline",
  subsets: ["latin"],
});

const flavors = Flavors({
  weight: "400",
  variable: "--font-google-flavors",
  subsets: ["latin"],
});

const caesarDressing = Caesar_Dressing({
  weight: "400",
  variable: "--font-google-caesar-dressing",
  subsets: ["latin"],
});

const sedgwickAveDisplay = Sedgwick_Ave_Display({
  weight: "400",
  variable: "--font-google-sedgwick-ave-display",
  subsets: ["latin"],
});

const protestRevolution = Protest_Revolution({
  weight: "400",
  variable: "--font-google-protest-revolution",
  subsets: ["latin"],
});

const { name, username, title, description, keywords, siteName, siteUrl } = defaultSEO;

export const metadata: Metadata = {
  title,
  description,
  keywords,
  generator: "Next.js",
  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  authors: [{ name, url: siteUrl }],
  creator: name,
  publisher: name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "https://arham.cc/og-image.png",
        alt: "Mohammed Arham Khan's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: username,
    images: ["https://arham.cc/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${googleSansFlex.variable} ${rubikBurned.variable} ${londrinaSketch.variable} ${fascinateInline.variable} ${flavors.variable} ${caesarDressing.variable} ${sedgwickAveDisplay.variable} ${protestRevolution.variable} h-full antialiased`}
    >
      <body className="flex min-h-full cursor-none flex-col bg-background font-sans text-foreground">
        <div className="fixed -inset-1/2 z-[-1] animate-[bg-animation_0.2s_infinite] bg-[url('/images/noise-transparent.png')] bg-repeat opacity-90" />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
