import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tentaclesoftware.com"),
  title: {
    default: "Tentacle Software | Elite Software Consulting",
    template: "%s | Tentacle Software",
  },
  description:
    "Elite software consulting. High-performance web platforms, cloud-native APIs, AI automation, and engineering team coaching. Build better software, faster.",
  keywords: [
    "software consulting",
    "custom software development",
    "web platform development",
    "cloud-native API",
    "engineering team coaching",
    "AI automation",
    "developer productivity",
    "software architecture",
    "Sydney software consulting",
    "Australia software consulting",
    "agentic AI systems",
    "building custom software",
    "hire software consultant",
    "fractional CTO",
    "technical leadership",
  ],
  authors: [{ name: "Tentacle Software" }],
  creator: "Tentacle Software",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://tentaclesoftware.com",
    siteName: "Tentacle Software",
    title: "Tentacle Software | Elite Software Consulting",
    description:
      "Elite software consulting. High-performance web platforms, cloud-native APIs, AI automation, and engineering team coaching.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tentacle Software - Elite Software Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentacle Software | Elite Software Consulting",
    description:
      "Elite software consulting. High-performance web platforms, cloud-native APIs, AI automation, and engineering team coaching.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tentaclesoftware.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-gray-950 text-white min-h-screen">{children}</body>
    </html>
  );
}
