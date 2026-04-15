import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/providers/Providers";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.className} antialiased`}>
      <head>
        <title>KeenKeeper</title>
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main className="min-h-screen bg-[#F8FAFC]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
