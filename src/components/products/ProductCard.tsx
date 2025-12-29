"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Star, Phone, Search, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  rating: number;
};

type ProductCardProps = {
  product: Product;
  onOrderNow: () => void;
  onCallNow: () => void;
};

export default function ProductCard({
  product,
  onOrderNow,
  onCallNow,
}: ProductCardProps) {
  const [previewOpen, setPreviewOpen] = React.useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.35 }}
        className="
          group
          w-full max-w-sm h-full
          rounded-2xl overflow-hidden
          bg-white/10 backdrop-blur-md
          border border-white/15
          shadow-lg hover:shadow-2xl
          hover:border-yellow-400/35
          flex flex-col
          transition-colors
        "
      >
        {/* ✅ Image */}
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={600}
            className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />

          {/* ✅ Overlay خفيف يظهر على Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

          {/* ✅ Lupe Button (Preview) */}
          <button
            type="button"
            onClick={() => setPreviewOpen(true)}
            className="
              absolute bottom-4 left-4
              w-11 h-11 rounded-full
              bg-black/40 backdrop-blur-sm
              border border-white/15
              flex items-center justify-center
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              hover:border-yellow-400/35
            "
            aria-label="عرض الصورة"
          >
            <Search className="w-5 h-5 text-yellow-400" />
          </button>

          {/* ✅ Rating */}
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 border border-white/15">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-white font-bold">{product.rating}/10</span>
          </div>
        </div>

        {/* ✅ Content */}
        <div className="p-6 flex flex-col gap-4 flex-1">
          <h3 className="text-xl font-bold text-center text-white">
            {product.name}
          </h3>

          <p className="text-white/80 text-center text-sm leading-relaxed">
            {product.description}
          </p>

          <div className="pt-1">
            <span className="text-sm font-semibold text-center block mb-3 text-white/90">
              المميزات:
            </span>
            <br />
            <div className="flex flex-wrap gap-2 justify-center">
              {product.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="
                    text-xs px-3 py-1 rounded-full
                    bg-white/10 border border-white/15
                    text-white/90
                    hover:border-yellow-400/35
                    transition-colors
                  "
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* ✅ Buttons */}
          <div className="mt-auto pt-2 flex gap-2">
            {/* ✅ دهبي */}
            <Button
              onClick={onOrderNow}
              className="btn-primary flex-1 font-bold rounded-xl"
            >
              اطلب الآن
            </Button>

            {/* ✅ دهبي زي اطلب الآن */}
            <Button
              onClick={onCallNow}
              className="btn-primary rounded-xl w-12 h-12 p-0 flex items-center justify-center"
              aria-label="اتصل الآن"
            >
              <Phone className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* ✅ Preview Modal */}
      {previewOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-3 -left-3 w-11 h-11 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:border-yellow-400/35"
              onClick={() => setPreviewOpen(false)}
              aria-label="إغلاق"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/30">
              <Image
                src={product.image}
                alt={product.name}
                width={1400}
                height={900}
                className="w-full h-[70vh] object-contain bg-black/30"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
