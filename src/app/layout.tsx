import { Geist, Geist_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { fonts } from "@/app/_fonts/fonts";
import { Cursor } from "@/components/cursor";
import { defaultSEO } from "@/config/seo-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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

const fontVariables = Object.values(fonts)
  .map((font) => font.variable)
  .join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full cursor-none flex-col bg-background font-sans text-foreground">
        <div className="fixed -inset-1/2 z-[-1] animate-[bg-animation_0.2s_infinite] bg-[url('/images/noise-transparent.png')] bg-repeat opacity-90" />
        <Cursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
