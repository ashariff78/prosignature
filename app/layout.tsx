import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'ProSignature - Free Email Signature Generator | Create Professional Signatures',
  description: 'Create professional email signatures in 30 seconds. Free email signature generator with templates for Gmail, Outlook, Apple Mail. No design skills needed.',
  keywords: 'email signature, email signature generator, gmail signature, outlook signature, professional email signature, free email signature',
  openGraph: {
    title: 'ProSignature - Professional Email Signatures in 30 Seconds',
    description: 'Create beautiful email signatures instantly. Works with Gmail, Outlook, and more.',
    url: 'https://prosignature.app',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-LFRZVPJ2SC" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LFRZVPJ2SC');
        `}
      </Script>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}