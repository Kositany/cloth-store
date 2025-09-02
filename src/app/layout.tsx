import type { Metadata } from "next";
import { Inter, Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import { ShopProvider } from "@/contexts/ShopContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jatoll Jatizi - Fuel Your Hustle | Premium Sportswear & Casual Clothing",
  description: "Discover Jatoll Jatizi's cutting-edge sportswear and casual clothing collection. Premium quality, bold designs, and neon aesthetics for the modern athlete and style enthusiast.",
  keywords: "sportswear, casual clothing, athletic wear, fashion, neon style, premium clothing, Jatoll Jatizi",
  openGraph: {
    title: "Jatoll Jatizi - Fuel Your Hustle",
    description: "Premium sportswear and casual clothing with bold neon aesthetics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${poppins.variable} antialiased bg-matte-black text-white`}
      >
        <ShopProvider>
          {children}
        </ShopProvider>
      </body>
    </html>
  );
}
