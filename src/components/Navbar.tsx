"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/Button";

import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "المنتجات", path: "/products" },
    { name: "الفيديوهات", path: "/videos" },
    { name: "من نحن", path: "/about" },
    { name: "فروعنا", path: "/branches" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  const navTextColor = scrolled ? "text-gray-800" : "text-white";
  const hoverTextColor = scrolled ? "text-yellow-600" : "text-yellow-400";
  const activeTextColor = scrolled
    ? "text-yellow-600 font-bold"
    : "text-yellow-400 font-bold";

  // ✅ Container صحيح (كان عندك <px-6> غلط)
  const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

  // ✅ شكل أيقونة السوشيال
  const socialBase =
    "bg-blue-500/10 border border-white/15 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/15 transition";

  // ✅ Component للسوشيال عشان نستخدمه مرتين (Desktop + Mobile menu)
  const SocialIcons = ({ variant }: { variant: "desktop" | "mobile" }) => {
    // لو النافبار بقى أبيض بعد السكرول، نخلي الحدود أغمق شوية
    const borderFix =
      scrolled && variant === "desktop"
        ? "border-black/10 bg-black/5 hover:bg-black/10"
        : "";

    return (
      <div
        className={`flex items-center gap-3 ${
          variant === "desktop" ? "" : "justify-center"
        }`}
      >
        <a
          href="https://wa.me/218000000000"
          target="_blank"
          rel="noopener noreferrer"
          className={`${socialBase} ${borderFix}`}
        >
          <FaWhatsapp className="w-5 h-5 text-green-600" />
        </a>

        <a
          href="https://www.facebook.com/rahasponge"
          target="_blank"
          rel="noopener noreferrer"
          className={`${socialBase} ${borderFix}`}
        >
          <FaFacebookF className="w-5 h-5 text-blue-600" />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={`${socialBase} ${borderFix}`}
        >
          <FaInstagram className="w-5 h-5 text-pink-600" />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={`${socialBase} ${borderFix}`}
        >
          <FaTiktok className="w-5 h-5 text-black" />
        </a>
      </div>
    );
  };

  return (
    <nav
      dir="rtl"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-lg bg-white/80" : "bg-transparent"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className={container}>
          {/* ✅ الهيدر الرئيسي */}
          <div className="relative h-20 flex items-center justify-between">
            {/* ✅ Social على أقصى الشمال (Desktop فقط) */}
            <div className="hidden lg:flex items-center gap-3 absolute left-2 top-1/2 -translate-y-1/2">
              <SocialIcons variant="desktop" />
            </div>

            {/* ✅ (يسار) Logo + Social على الديسكتوب */}
            <div className="flex items-center gap-4">
              <Link href="/" scroll className="shrink-0 flex items-center">
                <Logo scrolled={scrolled} />
              </Link>

            
            </div>

            {/* ✅ (الوسط) Links — في النص + مسافة كويسة عشان مايلزقوش في السوشيال */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-8 font-bold">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  scroll
                  className={`relative px-3 py-2 text-lg font-medium transition-colors ${
                    pathname === item.path
                      ? activeTextColor
                      : `${navTextColor} hover:${hoverTextColor}`
                  }`}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* ✅ (يمين) زر الموبايل */}
            <div className="flex items-center justify-end">
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
                onClick={() => setIsOpen((v) => !v)}
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-8 h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* ✅ قائمة الموبايل */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white/95 border-t overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      scroll
                      className={`block px-4 py-2 text-base font-medium rounded-md ${
                        pathname === item.path
                          ? "text-yellow-700 bg-yellow-50"
                          : "text-gray-700 hover:text-yellow-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* ✅ السوشيال على الموبايل تحت (زي صورتك التانية) */}
                <div className="border-t py-3">
                  <SocialIcons variant="mobile" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  );
}
