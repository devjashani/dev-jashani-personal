import type { Metadata, Viewport } from "next";
import { Anton, Cormorant_Garamond, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/site";
import { generateJsonLd } from "@/lib/seo";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap"
});

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.meta.url),
  title: {
    default: siteContent.meta.title,
    template: "%s | Dev Jashani"
  },
  description: siteContent.meta.description,
  keywords: siteContent.meta.keywords,
  authors: [{ name: siteContent.personal.name, url: siteContent.meta.url }],
  creator: siteContent.personal.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteContent.meta.url,
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    siteName: "Dev Jashani Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dev Jashani — Java Full Stack Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    creator: "@ig_Dev_",
    images: ["/opengraph-image"]
  },
  alternates: {
    canonical: siteContent.meta.url
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateJsonLd();

  return (
    <html
      lang="en"
      className={`${anton.variable} ${cormorant.variable} ${manrope.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[var(--ink)] text-[var(--bone)] font-sans antialiased selection:bg-[var(--gold)] selection:text-[var(--ink)] overflow-x-hidden min-h-screen relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--gold)] focus:text-[var(--ink)] focus:font-mono focus:text-xs focus:font-bold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--bone)]"
        >
          Skip to main content
        </a>
        <div className="fixed inset-0 pointer-events-none z-[1] film-grain opacity-40" />
        <div className="fixed inset-0 pointer-events-none z-[0] sci-fi-grid opacity-25" />
        {children}
      </body>
    </html>
  );
}

