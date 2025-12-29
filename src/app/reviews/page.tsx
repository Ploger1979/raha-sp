"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useKeenSlider } from "keen-slider/react";

// ✅ مهم: Types الرسمية (بدون any)
import type { KeenSliderInstance, KeenSliderPlugin } from "keen-slider";

interface Review {
  _id?: string;
  rating: number;
  comment?: string;
  name?: string;
  createdAt?: string;
}

/**
 * ✅ Autoplay Plugin (Type-safe)
 * - interval: وقت الانتظار بين السلايدات
 * - animDuration: مدة الحركة نفسها
 * - يوقف على hover
 */
function autoplay(interval = 2000, animDuration = 550): KeenSliderPlugin {
  return (slider: KeenSliderInstance) => {
    let timeoutId: number | undefined;
    let mouseOver = false;

    const clearNextTimeout = () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = undefined;
    };

    const nextTimeout = () => {
      clearNextTimeout();

      // ✅ وقف autoplay أثناء الـhover
      if (mouseOver) return;

      timeoutId = window.setTimeout(() => {
        /**
         * ✅ هنا كان يحصل crash:
         * track.details ممكن تكون null لو السلايدر اتعمل قبل ما الداتا تيجي
         */
        const details = slider.track?.details;
        const slidesCount = slider.slides?.length ?? 0;

        // لو مفيش سلايدات كفاية أو details مش جاهزة: حاول تاني
        if (!details || slidesCount <= 1) {
          nextTimeout();
          return;
        }

        const abs = details.abs;
        if (typeof abs !== "number") {
          nextTimeout();
          return;
        }

        // ✅ انتقال ناعم وسريع "معقول"
        slider.moveToIdx(abs + 1, true, { duration: animDuration });
      }, interval);
    };

    slider.on("created", () => {
      slider.container.addEventListener("mouseenter", () => {
        mouseOver = true;
        clearNextTimeout();
      });

      slider.container.addEventListener("mouseleave", () => {
        mouseOver = false;
        nextTimeout();
      });

      nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
    slider.on("destroyed", clearNextTimeout);
  };
}

export default function ReviewsPage() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews");
      let data: Review[] = await res.json();
      data = data.sort(() => Math.random() - 0.5);
      setReviews(data);
    } catch (error) {
      console.error("❌ Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, comment, name }),
      });

      if (res.ok) {
        alert(
          `✅ شكراً ${name || "ضيف"} لتقييمك: ${rating} نجوم\n📝 ملاحظتك: ${
            comment || "بدون ملاحظة"
          }`
        );
        setRating(0);
        setComment("");
        setName("");
        fetchReviews();
      } else {
        alert("❌ حدث خطأ أثناء إرسال التقييم.");
      }
    } catch (err) {
      console.error("❌ Network error:", err);
      alert("⚠️ حدث خطأ في الاتصال بالسيرفر.");
    }
  };

  // ✅ سلايدر + autoplay (بدون أي errors)
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      rtl: true,
      slides: { perView: 1, spacing: 15 },
      renderMode: "performance",
    },
    [autoplay(2500, 650)]
  );

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center text-white animated-gradient">
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

        <div className="relative z-20 w-full max-w-xl px-4">
          <br />
          <br />
          <br />
          <br />

          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 underline">
            شاركنا رأيك
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/10 p-6 rounded-lg border border-white/15 backdrop-blur-md"
          >
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setRating(num)}
                  className={
                    rating >= num
                      ? "text-[color:var(--accent-500)]"
                      : "text-white/50"
                  }
                  aria-label={`bewerte ${num} Sterne`}
                >
                  <Star
                    className="w-10 h-10"
                    fill={rating >= num ? "currentColor" : "none"}
                  />
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="اسمك أو المدينة (اختياري)"
              className="w-full p-3 rounded border border-white/20 bg-white/10 placeholder-white/60 text-white outline-none focus:border-[color:var(--accent-500)]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              placeholder="ملاحظاتك (اختياري)"
              className="w-full p-3 rounded border border-white/20 bg-white/10 placeholder-white/60 text-white outline-none focus:border-[color:var(--accent-500)]"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full w-full transition"
            >
              إرسال التقييم
            </button>
          </form>

          <br />
          <br />

          <div className="mt-10 bg-white/10 p-6 rounded-lg border border-white/15 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-[color:var(--accent-500)] text-center mb-6">
              آراء الزبائن
            </h2>

            {reviews.length === 0 && (
              <p className="text-white/70 text-center">لا توجد تقييمات بعد.</p>
            )}

            <br />

            <div ref={sliderRef} className="keen-slider overflow-hidden">
              {reviews.map((r, i) => (
                <div
                  key={r._id || i}
                  className="keen-slider__slide min-w-full flex flex-col justify-center items-center bg-white/10 border border-white/15 p-6 rounded-xl text-white text-right h-full min-h-[240px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-5 h-5 text-[color:var(--accent-500)]"
                        fill="currentColor"
                      />
                    ))}
                    <span className="text-sm text-white/70">
                      ({r.rating} نجوم)
                    </span>
                  </div>

                  {r.name && (
                    <p className="text-sm font-semibold mb-2">💬 {r.name}</p>
                  )}

                  <br />

                  <p className="text-sm leading-relaxed text-white/90">
                    {r.comment || "بدون تعليق"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <br />

          <div className="text-center mt-6">
            <Link
              href="/"
              className="inline-block bg-white/10 border border-white/15 hover:border-[color:var(--accent-500)] hover:bg-white/15 text-white font-bold py-2 px-6 rounded-full transition"
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
