"use client";

import { products } from "@/lib/products-data";
import ProductCard from "../products/ProductCard";
import Link from "next/link";

export default function ProductsPreview() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      {/* Overlay موحّد */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      <div className="relative z-20 w-full max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          منتجاتنا المميزة
        </h2>
        <br />
        <p className="text-lg sm:text-xl mb-10 text-white/85">
          ✨تشكيلة واسعة تلبي كل الأذواق والاحتياجات✨
        </p>
        <br />
        <div className="w-full flex justify-center">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            style={{ maxWidth: "1020px", width: "100%" }}
          >
            {products.slice(0, 3).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOrderNow={() => console.log(`طلب المنتج: ${product.name}`)}
                onCallNow={() =>
                  console.log(`اتصل الآن بخصوص: ${product.name}`)
                }
              />
            ))}
          </div>
        </div>
        <br />
        <div className="mt-12">
          <Link href="/products">
            <button className="btn-primary font-bold py-3 px-6 rounded-full text-lg shadow-md">
              عرض جميع المنتجات
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
