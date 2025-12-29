"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle, Award, Truck } from "lucide-react";

const features = [
  {
    icon: <Star className="w-8 h-8 text-[color:var(--accent-500)]" />,
    title: "جودة عالمية",
    description: "منتجات بمواصفات دولية وجودة مضمونة",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-[color:var(--accent-500)]" />,
    title: "شهادة الأيزو",
    description: "حاصلون على شهادة الأيزو في جودة الصناعة",
  },
  {
    icon: <Award className="w-8 h-8 text-[color:var(--accent-500)]" />,
    title: "خبرة 25 عام",
    description: "ربع قرن من الخبرة في صناعة المراتب",
  },
  {
    icon: <Truck className="w-8 h-8 text-[color:var(--accent-500)]" />,
    title: "توصيل لكل ليبيا",
    description: "خدمة توصيل تغطي جميع المدن الليبية",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 text-white">
      {/* Overlay خفيف موحّد */}
      <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />

      <div className="relative z-10 px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">لماذا تختار الراحة؟</h2>
          <br />
          <p className="text-xl text-white/80">
            لأن راحتك هي أولويتنا، نقدم لك الأفضل دائمًا
          </p>
        </motion.div>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-fit mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.04 }}
              className="text-center rounded-2xl p-6 w-72
                         bg-white/10 backdrop-blur-md border border-white/15
                         shadow-lg"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <br />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
              <br />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
