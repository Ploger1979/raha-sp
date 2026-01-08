"use client";

import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // ✅ نفس ستايل “Glass” للأيقونات
  const socialBase =
    "bg-white/10 border border-white/15 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/15 transition";

  return (
    <footer dir="rtl" className="relative animated-gradient text-white">
      {/* ✅ طبقة شفافة */}
      <div className="absolute inset-0 bg-black/35 z-0 pointer-events-none" />
      <br />
      {/* ✅ Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* ✅ 1) العنوان + العنوان الفرعي + العلامة التجارية */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 items-start text-center md:text-right">
          {/* ✅ 1) روابط سريعة (موبايل: عمود 1) */}
          <div className="order-1 w-full flex flex-col items-center md:items-end">
            <br />
            <h3 className="text-xl font-semibold text-[color:var(--accent-500)] underline mb-4">
              روابط سريعة
            </h3>

            <ul className="space-y-2 text-md">
              <li>
                <Link
                  href="/products"
                  className="hover:text-[color:var(--accent-500)] transition block"
                >
                  المنتجات
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[color:var(--accent-500)] transition block"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="hover:text-[color:var(--accent-500)] transition block"
                >
                  الفيديوهات
                </Link>
              </li>
              <li>
                <Link
                  href="/branches"
                  className="hover:text-[color:var(--accent-500)] transition block"
                >
                  الفروع
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[color:var(--accent-500)] transition block"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* ✅ 2) معلومات التواصل (موبايل: عمود 2) */}
          <div className="order-2 w-full flex flex-col items-center md:items-start">
            <br />
            <h3 className="text-xl font-semibold text-[color:var(--accent-500)] underline mb-4">
              معلومات التواصل
            </h3>

            <div className="space-y-2 text-md text-center md:text-right">
              <div className="flex justify-center md:justify-start items-center gap-2 hover:text-[color:var(--accent-500)] transition">
                00218924235513📞
              </div>
              <div className="flex justify-center md:justify-start items-center gap-2 hover:text-[color:var(--accent-500)] transition">
                00218918555111📞
              </div>

              <div className="flex justify-center md:justify-start items-center gap-2 hover:text-[color:var(--accent-500)] transition">
                <MapPin className="w-5 text-red-400" />
                بنغازي - قاريونس
              </div>

              <div className="flex justify-center md:justify-start items-center gap-2 hover:text-[color:var(--accent-500)] transition">
                📧 info@raha-sp.com
              </div>
            </div>
            
            {/* ✅ Social */}
            <div className="flex justify-center md:justify-start gap-3 pt-4">
              <a
                href="https://wa.me/218949830642"
                target="_blank"
                rel="noopener noreferrer"
                className={socialBase}
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 text-green-600" />
              </a>

              <a
                href="https://www.facebook.com/rahasponge"
                target="_blank"
                rel="noopener noreferrer"
                className={socialBase}
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5 text-blue-600" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={socialBase}
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-pink-600" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={socialBase}
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>

          {/* ✅ 3) اللوجو + النصوص (موبايل: تحت العمودين) */}
          <div className="order-3 md:order-2 col-span-2 md:col-span-1 w-full flex flex-col items-center space-y-4 pt-8 md:pt-0">
            <Image
              src="/assets/logo-raha-white.png"
              alt="شعار الراحة"
              width={192}
              height={192}
              style={{ height: "auto" }}
              priority
            />
            <br />
            <p className="text-sm leading-relaxed text-center max-w-xs text-white/85">
              فى شركتنا نؤمن ان النوم المريح أساس الحياه الصحيه لذلك نحن نقدم
              افضل المراتب والإسفنج بجوده عالميه منذ عام 1999
            </p>

            <hr className="w-full border-t border-white/20 my-4" />

            <div className="text-center text-sm w-full text-white/80">
              <p>© 2025 الراحة لصناعة الإسفنج والمراتب. جميع الحقوق محفوظة</p>
              <p className="mt-1">بصناعتنا_نفتخر_وبراحتكم_نعلو</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
