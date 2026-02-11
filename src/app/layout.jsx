import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Acenar Global",
  description: "ACENAR GLOBAL is an ISO-certified manufacturer specializing in custom wire harness and cable assembly solutions. We provide high-quality wiring for automotive, solar systems, telecommunications, and home appliances focusing on precision and durability.",
  icons: {
    icon: "/logo2 (1).png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}
