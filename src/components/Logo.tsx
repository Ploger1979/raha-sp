// ✅ Logo.tsx – مكون اللوجو
"use client";

import Image from "next/image";

type LogoProps = {
  scrolled: boolean;
};

export default function Logo({ scrolled }: LogoProps) {
  // ✅ قبل السكرول: لوجو أبيض — بعد السكرول: لوجو أزرق
  const logoSrc = scrolled
    ? "/assets/logo-raha-blue.png"
    : "/assets/logo-raha-white.png";

  return (
    <div className="flex items-center">
      {/* ✅ نفس أحجامك بالضبط */}
      <div className={`relative ${scrolled ? "w-40 h-28" : "w-60 h-20"}`}>
        <Image
          src={logoSrc}
          alt="شعار الراحة"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 120px, (max-width: 1200px) 160px, 200px"
          priority
        />
      </div>
    </div>
  );
}
