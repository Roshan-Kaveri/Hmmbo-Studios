import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/Navigation/NavigationBar";


// app/layout.tsx or pages/_app.tsx



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


import { Figtree } from "next/font/google";
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["800", "500"], // Choose only the weights you need
  variable: "--font-figtree", // optional if you want to use as a CSS variable
  display: "swap",
});

export const metadata = {
  title: "Hmmbo Studios",
  description: "An Team of Developers, Hmmbo Studios",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${figtree.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
