import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
// import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Nunito_Sans, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Samuel's Portfolio",
  description: "portfolio",
};

const logoUrl = "/app/images/logo.png";
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Projects", href: "/project" },
  { label: "Resume", href: "/resume" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hs">
      <body className={`${poppins.variable} antialiased`}>
        <Header logo={logoUrl} navItems={navItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
