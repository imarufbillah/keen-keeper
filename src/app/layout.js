import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | KeenKeeper — Friends to keep close in your life",
  description:
    "Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.className} antialiased`}>
      <body>
        <Navbar />
        <main className="min-h-screen bg-[#F8FAFC]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
