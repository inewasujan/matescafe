import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "MATESCAFE",
  description: "MatesCafe Australia",
  icons: {
    icon: [{
      url: "/images/icons/matescafe.ico",
  }]},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">   
        {/* {Inter.className}    */}
      <body className={`$poppins.variable`}>
        {children}
      </body>
    </html>
  );
}
