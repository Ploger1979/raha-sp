"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function VideoSection() {
  return (
    <section className="relative py-20 text-white overflow-x-hidden" dir="rtl">
      {/* Overlay خفيف */}
      <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />

      {/* ✅ Wrapper يضمن التمركز في كل الشاشات */}
      <div className="relative z-10 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          {/* ✅ Flex بدل Grid (أضمن للـ RTL) */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 lg:gap-14">
            {/* ✅ النص */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-center lg:text-right space-y-6"
            >
              <h2 className="text-4xl font-bold">شاهد جودتنا بنفسك</h2>
              <br />
              <p className="text-lg text-white/85 leading-relaxed">
                نحن لا نتحدث عن الجودة فقط، بل نريها لك. شاهد فيديوهاتنا وتعرف
                على مراحل صناعة مراتب الراحة التي تضمن لك نوماً هنيئاً.
              </p>
              <br />
              <div className="flex justify-center lg:justify-start">
                <Link href="/videos">
                  <div className="btn-primary font-bold py-3 px-6 rounded-full text-lg shadow-md">
                    عرض كل الفيديوهات
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* ✅ الفيديو */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="
                w-full lg:w-1/2
                flex justify-center
              "
            >
              <div
                className="
                  w-full max-w-xl
                  rounded-2xl overflow-hidden
                  bg-white/10 backdrop-blur-md border border-white/15
                  shadow-2xl
                "
              >
                {/* ✅ Responsive ratio */}
                <div className="aspect-video w-full">
                  <video controls className="w-full h-full object-cover">
                    <source src="/videos/8.mp4" type="video/mp4" />
                    المتصفح لا يدعم تشغيل الفيديو.
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
