import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Церковь Суный | Русская молодёжь в Инчхоне, Южная Корея",
  description:
    "Русскоязычная молодёжная церковь в Инчхоне. Молодёжное служение каждую субботу 20:00. Приходи как есть.",
  keywords:
    "русская церковь Инчхон, церковь Корея, русская молодёжь Южная Корея, церковь Суный",
  authors: [{ name: "Церковь Суный" }],
  openGraph: {
    title: "Церковь Суный | Русская молодёжь в Инчхоне, Южная Корея",
    description:
      "Русскоязычная молодёжная церковь в Инчхоне. Молодёжное служение каждую субботу 20:00. Приходи как есть.",
    url: "https://rusyouthkorea.com",
    siteName: "Церковь Суный",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://rusyouthkorea.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Церковь Суный — Русская молодёжь в Инчхоне",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Церковь Суный | Русская молодёжь в Инчхоне",
    description:
      "Русскоязычная молодёжная церковь в Инчхоне. Каждую субботу 20:00.",
  },
  metadataBase: new URL("https://rusyouthkorea.com"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        {/* Google Analytics placeholder */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script> */}
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
