"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "iban" | "">(
    ""
  );
  const [clientName, setClientName] = useState(""); // ✅ اسم العميل
  const [clientPhone, setClientPhone] = useState(""); // ✅ رقم الهاتف
  const router = useRouter();

  // ✅ حساب المجموع الكلي بشكل بسيط (لو فيه سعر لاحقًا ممكن نستخدمه هنا)
  const total = cart.length * 1;

  const handleConfirm = async () => {
    if (!paymentMethod) {
      alert("يرجى اختيار طريقة الدفع");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mzzvvlar", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payment_method: paymentMethod,
          order_details: cart.map(
            (item) =>
              `${item.size} - ${item.height} - ${item.density} - ${item.stars}`
          ),
          total: `${total} د.ل`,
          client_name: clientName,
          client_phone: clientPhone,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ تم إرسال الطلب بنجاح! سنتواصل معك قريبًا.");
        router.push("/thanks");
      } else {
        alert(`❌ فشل في الإرسال: ${result?.error || "حدث خطأ غير معروف"}`);
      }
    } catch (error) {
      alert(
        "❌ فشل الاتصال بـ Formspree – تحقق من اتصال الإنترنت أو إعدادات النموذج."
      );
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />

      {/* ✅ نفس خلفية الموقع + overlay (ألوان فقط) */}
      <section className="relative min-w-screen text-white animated-gradient px-6 py-16 flex items-center justify-center">
        <br />
        {/* ✅ طبقة شفافة للتباين */}
        <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* ✅ نفس الـbox/structure – بس ألوان موحّدة (Glass) */}
        <div className="relative z-10 w-[40%] max-w-5xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/15">
          <br />
          <br />

          <h1 className="text-3xl font-bold mb-8 text-center underline">
            🧾 تأكيد الطلب
          </h1>

          <br />

          {/* ✅ عرض محتوى السلة */}
          <div className="space-y-4 text-right mb-8">
            {cart.map((item, index) => (
              <div key={index} className="border-b border-white/20 pb-2">
                <p>
                  ✨{" "}
                  <strong className="text-[color:var(--accent-500)]">
                    المقاس:
                  </strong>{" "}
                  {item.size}
                </p>
                <br />
                <p>
                  ✨{" "}
                  <strong className="text-[color:var(--accent-500)]">
                    الارتفاع:
                  </strong>{" "}
                  {item.height}
                </p>
                <br />
                <p>
                  ✨{" "}
                  <strong className="text-[color:var(--accent-500)]">
                    الضغط:
                  </strong>{" "}
                  {item.density}
                </p>
                <br />
                <p>
                  ✨{" "}
                  <strong className="text-[color:var(--accent-500)]">
                    التقييم:
                  </strong>{" "}
                  {item.stars}
                </p>
                <br />
              </div>
            ))}
          </div>

          <br />

          {/* ✅ بيانات العميل */}
          <div className="mb-8 text-right">
            <p className="mb-4 text-lg font-bold text-center">
              👤 بيانات العميل:
            </p>
            <br />

            <input
              type="text"
              placeholder="الاسم الكامل"
              className="
                w-full p-2 rounded
                bg-white/10 border border-white/20
                text-white placeholder-white/60
                mb-3 outline-none
                focus:border-[color:var(--accent-500)]
              "
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />

            <input
              type="tel"
              dir="rtl"
              placeholder="رقم الهاتف للتواصل"
              className="
                w-full p-2 rounded
                bg-white/10 border border-white/20
                text-white placeholder-white/60
                outline-none
                focus:border-[color:var(--accent-500)]
              "
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              required
            />
          </div>

          <br />

          {/* ✅ اختيار طريقة الدفع */}
          <div className="mb-8 text-right">
            <p className="mb-4 text-lg font-bold text-center">
              💳 اختر طريقة الدفع:
            </p>
            <div className="space-y-2">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                />
                PayPal
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  value="iban"
                  checked={paymentMethod === "iban"}
                  onChange={() => setPaymentMethod("iban")}
                />
                تحويل بنكي (IBAN)
              </label>
            </div>
          </div>

          {/* ✅ رسالة واتساب عند الدفع عبر IBAN */}
          {paymentMethod === "iban" && (
            <p className="text-[color:var(--accent-500)] mt-4 text-sm text-center">
              بعد تأكيد الطلب، يُرجى إرسال صورة الحوالة إلى واتساب: <br />
              <strong className="text-lg text-white">00218949830642📱 </strong>
            </p>
          )}

          <br />

          {/* ✅ زر تأكيد (نفس ستايل الأزرار عندك) */}
          <div className="text-center">
            <button
              onClick={handleConfirm}
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full font-bold text-lg transition"
            >
              ✅ تأكيد الطلب
            </button>
          </div>
          <br />
          <br />
          {/* ✅ أزرار الرجوع (بدون تغيير Structure) */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6">
            <Link
              href="/cart"
              className="
      inline-block
      bg-white/10 border border-white/15
      hover:border-[color:var(--accent-500)]
      hover:bg-white/15
      text-white font-bold
      py-2 px-6 rounded-full transition
    "
            >
              ↩️ رجوع للسلة
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

          <br />
          <br />
        </div>
      </section>

      
      <Footer />
    </>
  );
}
