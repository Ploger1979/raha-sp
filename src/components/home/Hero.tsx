"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowLeft } from "lucide-react";

export default function Hero() {
  const handleCallNow = () => {
    window.open("tel:+218912090166", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/218949830642", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      {/* ✅ طبقة خلفية (أقوى شوية عشان القراءة تكون واضحة واحترافية) */}
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                فن صناعة الراحة
              </motion.h1>

              <br />

              <p className="text-xl md:text-3xl font-light">
                جودة تستحقها وراحة تليق بك
              </p>

              <br />

              <p className="text-base md:text-xl leading-relaxed">
                👑مع مراتب الراحة.. نومك حيبقى زي السلطان 👑
                <br />
                اختر مرتبتك بعناية، واترك الباقي علينا
              </p>

              <br />

              <div className="flex flex-col items-center w-full max-w-xs space-y-4 pt-4">
                {/* ✅ زر الاتصال (Gold Brand) */}
                <button
                  onClick={handleCallNow}
                  className="bg-blue-500 hover:bg-blue-600   font-bold py-3 px-6 rounded-full text-lg flex items-center justify-center w-full"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل الآن
                </button>

                <br />

                {/* ✅ WhatsApp (White outline) */}
                <button
                  onClick={handleWhatsApp}
                  className="hover:bg-green-500 font-bold py-3 px-6 rounded-full text-lg flex items-center justify-center w-full"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  WhatsApp 📞
                </button>

                <br />

                <p className="text-lg text-white mt-4">
                  بصناعتنا_نفتخر_وبراحتكم_نعلو
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="floating-animation">
              <Image
                src="/assets/new-designer-al-raha/Copy of raha 1.webp"
                alt="مراتب الراحة"
                width={800}
                height={500}
                className="rounded-2xl shadow-2xl w-full max-w-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
