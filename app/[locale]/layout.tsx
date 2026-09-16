import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { CartProvider } from '../context/CartContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const locales = ['en', 'te'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: "AR Products by Venkateswara Products - Authentic Atreyapuram Pootharekulu | Andhra Sweets",
    description: "V Ashok Kumar's AR Products by Venkateswara Products - Authentic Atreyapuram Pootharekulu and traditional Andhra sweets. Worldwide door delivery. Order fresh handcrafted sweets via WhatsApp. Premium quality, 100% pure ingredients.",
    keywords: "Atreyapuram Pootharekulu, AR Products, Venkateswara Products, Andhra sweets, traditional sweets, paper thin sweet, Indian sweets, online sweet shop, worldwide delivery, pootharekulu online, dry fruit pootharekulu, chocolate pootharekulu, V Ashok Kumar",
    authors: [{ name: "AR Products by Venkateswara Products" }],
    creator: "AR Products by Venkateswara Products",
    publisher: "Venkateswara Products",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://www.venkateswaraproducts.com"),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "AR Products by Venkateswara Products - Authentic Atreyapuram Pootharekulu",
      description: "Order authentic Atreyapuram Pootharekulu online. Handcrafted traditional Andhra sweets with worldwide delivery. Premium quality, 100% pure ingredients.",
      url: "https://www.venkateswaraproducts.com",
      siteName: "AR Products by Venkateswara Products",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "AR Products by Venkateswara Products - Atreyapuram Pootharekulu",
        },
      ],
      locale: locale === 'te' ? 'te_IN' : 'en_IN',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "AR Products by Venkateswara Products - Authentic Atreyapuram Pootharekulu",
      description: "Order authentic Atreyapuram Pootharekulu online. Handcrafted traditional Andhra sweets with worldwide delivery.",
      images: ["/logo.png"],
      creator: "@artraditional",
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
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
        { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) notFound();
  
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <CartProvider>
            {children}
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
