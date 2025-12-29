"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function TestimonialSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-20 max-w-3xl mx-auto px-4 space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
          مراتب الراحة ترجعك شباب 😉
        </h2>

        <p className="text-2xl md:text-3xl mb-8 leading-relaxed text-white/90">
          اسأل المجرب... وشوف الفرق بنفسك!
        </p>

        <p className="text-xl md:text-2xl leading-relaxed text-white/85">
          آراء عملائنا هي سر نجاحنا
        </p>
        <br />
        <Link href="/reviews">
          <Button className="btn-primary font-bold py-3 px-6 rounded-full text-lg shadow-md">
            شوف آراء عملائنا
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
