"use client"; // ✅ الصفحة تفاعلية (Client Side)

import { useState } from "react";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function OrderFormPage() {
  const router = useRouter();

  // ✅ حالات النموذج
  const [size, setSize] = useState("");
  const [height, setHeight] = useState("");
  const [density, setDensity] = useState("");
  const [stars, setStars] = useState(0);

  const { addToCart } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ إضافة المواصفات للسلة
    addToCart({ size, height, density, stars });

    // ✅ تحويل للسلة
    router.push("/cart");
  };

  return (
    <>
      <Navbar />

      {/* ✅ نفس ألوان الموقع + نفس الـoverlay */}
      <section className="relative min-h-screen text-white animated-gradient px-4">
        {/* ✅ طبقة شفافة للتباين */}
        <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

        {/* ✅ Wrapper عشان نتحكم في التوسيط والمسافات (بدون ما نغير المحتوى) */}
        <div className="relative z-10 pt-28 pb-16 flex flex-col items-center">
            <br /><br /><br /><br /><br /><br />
          {/* ✅ الفورم */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-6"
            dir="rtl"
          >
            <br /><br /> 
            <h1 className="text-3xl font-bold text-center underline">
              مواصفات المرتبة
            </h1>
<br />
            {/* ✅ المقاس */}
            <div>
              <label className="block mb-1 text-[color:var(--accent-500)] font-semibold">
                مقاس المرتبة (سم)
              </label>
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="مثال: 180 × 200"
                className="
                  w-full p-2 rounded
                  bg-white/10 border border-white/20
                  text-white placeholder-white/60
                  outline-none
                  focus:border-[color:var(--accent-500)]
                "
                required
              />
            </div>
<br />
            {/* ✅ الارتفاع */}
            <div>
              <label className="block mb-1 text-[color:var(--accent-500)] font-semibold">
                ارتفاع المرتبة (سم)
              </label>
              <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="مثال: 25 سم"
                className="
                  w-full p-2 rounded
                  bg-white/10 border border-white/20
                  text-white placeholder-white/60
                  outline-none
                  focus:border-[color:var(--accent-500)]
                "
                required
              />
            </div>
<br />
            {/* ✅ درجة الضغط */}
            <div>
              <label className="block mb-1 text-[color:var(--accent-500)] font-semibold">
                درجة ضغط المرتبة
              </label>
              <input
                type="text"
                value={density}
                onChange={(e) => setDensity(e.target.value)}
                placeholder="متوسط / عالي / سوفت..."
                className="
                  w-full p-2 rounded
                  bg-white/10 border border-white/20
                  text-white placeholder-white/60
                  outline-none
                  focus:border-[color:var(--accent-500)]
                "
                required
              />
            </div>
<br />
            {/* ✅ النجوم */}
            <div>
              <label className="block mb-2 text-[color:var(--accent-500)] font-semibold text-center">
                كم نجمة تعجبك؟
              </label>

              <div className="flex gap-2 flex-wrap items-center justify-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button
                    type="button"
                    key={num}
                    onClick={() => setStars(num)}
                    className={
                      stars >= num
                        ? "text-[color:var(--accent-500)]"
                        : "text-white/40"
                    }
                    aria-label={`star-${num}`}
                  >
                    <Star
                      className="w-8 h-8"
                      fill={stars >= num ? "currentColor" : "none"}
                    />
                  </button>
                ))}
              </div>
            </div>
<br />
            {/* ✅ زر المتابعة */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition"
            >
              متابعة الطلب
            </button>
            <br /><br />
          </form>
<br /><br /><br />
          {/* ✅ زر الرجوع (دلوقتي بقى تحت الفورم مباشرة) */}
          <Link
            href="/"
            className="
              mt-10 inline-block
              bg-white/10 border border-white/15
              hover:border-[color:var(--accent-500)]
              hover:bg-white/15
              text-[color:var(--accent-500)] font-bold
              py-2 px-6 rounded-full transition
            "
          >
            ← الرجوع إلى الرئيسية
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
