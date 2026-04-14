import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="pt-16 sm:pt-20 pb-6 bg-primary text-white text-center">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Footer Logo */}
        <Link
          href="/"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold shrink-0"
        >
          Keen<span className="font-semibold">Keeper</span>
        </Link>

        {/* Paragraph */}
        <p className="text-white/80 mt-4 font-light text-sm sm:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="space-y-4 mt-6 mb-10">
          <h3 className="text-sm font-medium tracking-wide uppercase text-white/60">
            Social Links
          </h3>
          <div className="flex gap-3 items-center justify-center">
            <a
              href="#"
              className="p-2.5 bg-white rounded-full flex items-center justify-center aspect-square text-primary w-fit hover:bg-white/90 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2.5 bg-white rounded-full flex items-center justify-center aspect-square text-primary w-fit hover:bg-white/90 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="p-2.5 bg-white rounded-full flex items-center justify-center aspect-square text-primary w-fit hover:bg-white/90 transition-colors"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="text-[#1A8862]/20" />

        {/* Legal */}
        <div className="pt-6 pb-1 text-white/50 font-light text-sm flex flex-col sm:flex-row gap-3 justify-between items-center">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
          {/* Legal Links */}
          <div className="flex gap-5 sm:gap-7">
            <a href="#" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
