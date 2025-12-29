"use client";

import type { ReactNode } from "react";
import {
  Award,
  Users,
  Factory,
  Heart,
  Star,
  Shield,
  MapPin,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "25+",
      label: "سنة من الخبرة",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "50000+",
      label: "عميل راضي",
    },
    { icon: <MapPin className="w-8 h-8" />, number: "5", label: "مدن نخدمها" },
    {
      icon: <Factory className="w-8 h-8" />,
      number: "7",
      label: "فروع في ليبيا",
    },
  ];

  const values = [
    {
      icon: <Star className="w-12 h-12" />,
      title: "الجودة",
      description: "نلتزم بأعلى معايير الجودة في جميع منتجاتنا لضمان راحتكم",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "الثقة",
      description:
        "بناء علاقات طويلة الأمد مع عملائنا قائمة على الثقة والشفافية",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "الراحة",
      description: "هدفنا الأساسي هو توفير الراحة والنوم الهادئ لجميع عملائنا",
    },
  ];

  // ✅ Wrapper إجباري للتوسيط (حل نهائي لمشكلة الميل يمين على الشاشات العريضة)
  const Wrap = ({ children }: { children: ReactNode }) => (
    <div className="w-full flex justify-center">
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );

  return (
    <div dir="rtl" className="w-full overflow-x-hidden">
      <Navbar />

      {/* ✅ Header */}
      <section className="relative w-full min-h-[40vh] animated-gradient py-10 text-white flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />
        <Wrap>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            من نحن
          </motion.h1>
          <br />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl leading-relaxed text-white/90"
          >
            قصة نجاح امتدت لأكثر من ربع قرن في خدمة راحتكم في كل ربوع ليبيا
          </motion.p>
        </Wrap>
      </section>

      {/* ✅ قصتنا */}
      <section className="relative w-full animated-gradient py-20 text-white">
        <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />
        <br />
        <Wrap>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 justify-items-center">
            {/* ✅ النص (يسار على الديسكتوب) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-xl space-y-6 text-center lg:text-right order-2 lg:order-1"
            >
              <h2 className="text-4xl font-bold underline text-center lg:text-right">
                قصتنا: من بنغازي إلى كل ليبيا
              </h2>
              <br />
              <p className="text-lg leading-relaxed text-white/90">
                بدأت رحلة شركة الراحة في عام 1999 برؤية واضحة وهي توفير أفضل
                المراتب والإسفنج عالي الجودة للعائلات الليبية. انطلقنا من
                بنغازي، وبفضل ثقتكم، أصبحت شركة الراحة واحدة من الرواد في هذا
                المجال على مستوى ليبيا.
              </p>

              <p className="text-lg leading-relaxed text-white/90">
                في شركة الراحة نحرص على استخدام أفضل المواد وأحدث التقنيات في
                صناعة منتجاتنا، لتصلكم أينما كنتم.
              </p>

              <p className="text-lg leading-relaxed text-white/90">
                اليوم، نفتخر بخدمة آلاف العملاء في جميع أنحاء ليبيا، ونواصل
                التطوير والابتكار لنبقى عند حسن ظنكم دائمًا.
              </p>
            </motion.div>

            {/* ✅ الصورة (يمين على الديسكتوب) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full flex justify-center order-1 lg:order-2"
            >
              <div className="relative w-full max-w-md h-[350px] md:h-[400px] lg:h-[420px]">
                <Image
                  src="/assets/Abaut-us-1.png"
                  alt="مصنع الراحة"
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
          <br />
        </Wrap>
      </section>

      {/* ✅ إنجازاتنا */}
      <section className="relative w-full py-24 animated-gradient text-white text-center">
        <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />
        <br />
        <Wrap>
          <h2 className="text-4xl font-bold mb-6 underline">
            إنجازاتنا بالأرقام
          </h2>
          <br />
          <p className="text-xl mb-12 text-white/90">
            أرقام تعكس ثقة ورضا عملائنا على مدى السنين
          </p>
          <br />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-effect rounded-xl p-8 w-full max-w-[280px]"
              >
                <div className="mb-4 flex justify-center text-white/90">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[color:var(--accent-500)]">
                  {stat.number}
                </div>
                <div className="text-md font-bold text-white/90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          <br />
        </Wrap>
      </section>

      {/* ✅ شهادة الجودة */}
      <section className="relative w-full py-20 animated-gradient text-white">
        <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />
        <br />
        <Wrap>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 justify-items-center">
            {/* ✅ النص */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-xl space-y-6 text-center lg:text-right order-2 lg:order-1"
            >
              <h3 className="text-4xl font-bold underline text-center lg:text-right">
                صناعة ليبية بمعايير عالمية
              </h3>

              <ul className="space-y-2 list-disc list-inside text-xl text-white/90 text-right">
                <li>اختيار أفضل المواد الخام</li>
                <li>تطبيق معايير الجودة الدولية</li>
                <li>فحص دقيق لكل منتج قبل التسليم</li>
                <li>تطوير مستمر للمنتجات والخدمات</li>
              </ul>

              <div className="flex items-center gap-3 justify-center lg:justify-start pt-4">
                <CheckCircle className="text-green-300 w-6 h-6" />
                <p className="font-semibold text-xl text-white/90">
                  حاصلون على شهادة الأيزو العالمية
                </p>
              </div>
            </motion.div>

            {/* ✅ الصورة */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full flex justify-center order-1 lg:order-2"
            >
              <div className="relative w-full max-w-md h-[300px] md:h-[350px] lg:h-[400px]">
                <Image
                  src="/assets/Abaut-us-3.png"
                  alt="شهادة الجودة"
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
          <br />
        </Wrap>
      </section>

      {/* ✅ رؤيتنا / رسالتنا / قيمنا */}
      <section className="relative w-full animated-gradient py-20 text-white">
        <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />
        <br />
        <Wrap>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center mb-16">
            <div className="bg-white rounded-xl p-6 shadow text-gray-800 w-full max-w-md text-center">
              <h3 className="text-3xl font-bold mb-4 underline">رؤيتنا</h3>
              <p className="text-lg">
                أن نكون الخيار الأول لكل عائلة ليبية عند اختيار مراتب النوم
                المريحة والجودة التي تدوم.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow text-gray-800 w-full max-w-md text-center">
              <h3 className="text-3xl font-bold mb-4 underline">رسالتنا</h3>
              <p className="text-lg">
                تقديم منتجات عالية الجودة بأسعار تنافسية، مع الحرص على راحة ورضا
                عملائنا الدائم.
              </p>
            </div>
          </div>
<br />
          <h2 className="text-5xl font-bold text-center mb-10 text-[color:var(--accent-500)] underline">
            قيمنا
          </h2>
<br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 text-center shadow text-gray-800 w-full max-w-sm"
              >
                <div className="mb-4 flex text-[color:var(--accent-500)] justify-center">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                <p>{v.description}</p>
              </motion.div>
            ))}
          </div>
          <br />
        </Wrap>
      </section>

      <Footer />
    </div>
  );
}
