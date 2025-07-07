import type { Metadata } from "next";
import { Roboto, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deutscher Bierentdecker",
  description: "Exploration of German beers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${pacifico.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
