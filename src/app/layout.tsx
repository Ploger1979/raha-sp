// src/app/layout.tsx
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { CartProvider } from "@/context/CartContext";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raha-sp.netlify.app"),
  title: "الراحة لصناعة الاسفنج والمراتب",
  description: "راحة تستحقها",
  icons: { icon: "/favicon.png" },

  openGraph: {
    title: "الراحة لصناعة الاسفنج والمراتب",
    description: "راحة تستحقها",
    url: "https://raha-sp.netlify.app",
    siteName: "الراحة",
    type: "website",
    locale: "ar_LY",
    images: [
      {
        url: "/og-raha.jpg",
        width: 1200,
        height: 630,
        alt: "الراحة لصناعة الاسفنج والمراتب",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "الراحة لصناعة الاسفنج والمراتب",
    description: "راحة تستحقها",
    images: ["/og-raha.jpg"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans animated-gradient text-white`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
