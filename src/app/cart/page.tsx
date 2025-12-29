"use client";

import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <Navbar />

      {/* ✅ نفس خلفية الموقع + نفس overlay (ألوان فقط) */}
      <section className="relative min-h-screen text-white animated-gradient px-4 py-16">
        {/* ✅ طبقة شفافة للتباين (زي كل الصفحات) */}
        <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

        {/* ✅ المحتوى فوق الخلفية */}
        <div className="relative z-10">
          <br /> <br /> <br /> <br />
          <br />
          <h1 className="text-4xl font-bold text-center underline mb-12">
            🛒 سلة المشتريات
          </h1>
          <br />
          <div className="flex flex-col items-center gap-8">
            {cart.length === 0 ? (
              <p className="text-xl text-[color:var(--accent-500)]">
                السلة فارغة حاليًا
              </p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="
                    w-full max-w-md
                    bg-white/10 backdrop-blur-md
                    p-6 rounded-2xl
                    border border-white/15
                    text-right space-y-4
                  "
                >
                  <br />

                  <p>
                    <strong className="text-[color:var(--accent-500)]">
                      المقاس:
                    </strong>{" "}
                    {item.size}
                  </p>

                  <br />

                  <p>
                    <strong className="text-[color:var(--accent-500)]">
                      الارتفاع:
                    </strong>{" "}
                    {item.height}
                  </p>

                  <br />

                  <p>
                    <strong className="text-[color:var(--accent-500)]">
                      درجة الضغط:
                    </strong>{" "}
                    {item.density}
                  </p>

                  <br />

                  <p>
                    <strong className="text-[color:var(--accent-500)]">
                      التقييم:
                    </strong>{" "}
                    ⭐ {item.stars}
                  </p>

                  <br />

                  {/* ✅ زر الحذف (خليه واضح ومناسب مع الثيم) */}
                  <div className="flex justify-center">
                    <button
                      onClick={() => removeFromCart(index)}
                      className="
                        bg-red-600 hover:bg-red-700
                        text-white py-2 px-4
                        rounded-full
                        flex items-center gap-2
                        transition
                      "
                    >
                      حذف <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <br />
                </div>
              ))
            )}

            <br />

            {/* ✅ زر تأكيد الطلب (نفس ستايل الأزرار عندك) */}
            {cart.length > 0 && (
              <Link
                href="/checkout"
                className="
                  bg-blue-500 hover:bg-blue-600
                  text-white font-bold
                  py-3 px-8 rounded-full
                  text-lg mt-8
                  transition
                "
              >
                ✅ تأكيد الطلب
              </Link>
            )}

            <br />
          </div>
        </div>
        {/* ✅ أزرار الرجوع (UX محترف) */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
          <Link
            href="/products"
            className="
      inline-block
      bg-white/10 border border-white/15
      hover:border-[color:var(--accent-500)]
      hover:bg-white/15
      text-white font-bold
      py-2 px-6 rounded-full transition
    "
          >
            ↩️ متابعة التسوّق
          </Link>

          <Link
            href="/"
            className="
      inline-block
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
