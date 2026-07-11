import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ColorModeProvider } from "@/context/ColorModeContext";
import { metadata as siteMetadata } from "@/constants/portfolio";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.url),
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/scb_icon.svg",
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ["/scb_icon.svg"],
  },
  icons: {
    icon: "/scb_icon.svg",
    shortcut: "/scb_icon.svg",
    apple: "/scb_icon.svg",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${inter.variable}`}>
      <body>
        <ColorModeProvider>{children}</ColorModeProvider>
      </body>
    </html>
  );
}
