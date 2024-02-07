import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
<script src='https://kit.fontawesome.com/a076d05399.js'/>

export const metadata: Metadata = {
  title: "دفتر ترجمه رسمی⚖️سپهر کرج شماره 2",
  description: "دفتر ترجمه رسمی تهران . کرج",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
