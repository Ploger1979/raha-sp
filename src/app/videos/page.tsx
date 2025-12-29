"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VideosPage() {
  const localVideos = Array.from(
    { length: 20 },
    (_, i) => `/videos/${i + 1}.mp4`
  );

  return (
    <>
      <Navbar />

      {/* ✅ Header نفس ثيم الموقع (بدون تغيير structure) */}
      <section className="relative min-h-[30vh] flex flex-col items-center justify-center text-white text-center px-4">
        <br />
        <br />
        <br />
        <br />

        {/* ✅ Overlay خفيف لتحسين التباين على الخلفية الكحلي */}
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
<br /><br />
        <div className="relative z-10 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            معرض الفيديوهات
          </motion.h1>

          <br />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/85"
          >
            اكتشف مراحل التصنيع والجودة في مصنع الراحة عبر هذه المقاطع.
          </motion.p>
        </div>

        <br />
      </section>

      {/* ✅ Main (نفس الخلفية الأساسية للموقع) */}
      <main className="relative py-20">
        <br />

        {/* ✅ Overlay خفيف جدًا (اختياري) عشان الكروت تبان أوضح */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        <div className="relative z-10 w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-4 max-w-7xl w-full">
            {localVideos.map((src, idx) => (
              <div
                key={idx}
                className="
                  rounded-2xl overflow-hidden
                  bg-white/10 backdrop-blur-md
                  border border-white/15
                  shadow-lg hover:shadow-xl
                  transition-transform duration-300 hover:scale-[1.02]
                "
              >
                <video
                  controls
                  className="w-full aspect-video object-cover"
                  poster="/assets/Rahr-splash.png"
                >
                  <source src={src} type="video/mp4" />
                  المتصفح لا يدعم تشغيل الفيديو.
                </video>
              </div>
            ))}
          </div>
        </div>

        <br />
      </main>

      <Footer />
    </>
  );
}
