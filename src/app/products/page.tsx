"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/products-data";
import { useRouter } from "next/navigation";

const categories = [
  { id: "all", name: "جميع المنتجات" },
  { id: "mattresses", name: "المراتب" },
  { id: "foam", name: "الإسفنج" },
  { id: "accessories", name: "الإكسسوارات" },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleCallNow = () => {
    window.open("tel:+218920786000", "_self");
  };

  const handleOrderNow = () => {
    router.push("/order-form");
  };

  return (
    <>
      <Navbar />

      {/* ✅ نفس ألوان الصفحة الرئيسية (بدون تغيير Structure) */}
      <div className="relative min-h-screen flex items-center justify-center animated-gradient text-white">
        <br />
        <br />
        <br />
        <br />

        {/* ✅ نفس طبقة الشفافية */}
         <div className="absolute inset-0 bg-black/25 z-0 pointer-events-none" />

        {/* ✅ المحتوى الأساسي */}
        <main className="relative z-10 pt-28">
          {/* ✅ العنوان */}
          <section className="text-center py-16 px-4">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              منتجاتنا
            </motion.h1>
            <br />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/90"
            >
              اكتشف مجموعتنا الواسعة من المراتب والإسفنج عالي الجودة
            </motion.p>
            <br />
          </section>

          {/* ✅ الفلاتر (ألوان فقط) */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    className={`px-10 py-8 rounded-full ${
                      selectedCategory === category.id
                        ? "btn-primary font-bold"
                        : "!text-white !border-white/40 bg-white/10 font-bold hover:bg-white/20 hover:!border-white/70 transition-colors"
                    }`}
                  >
                    <Filter className="w-4 h-4 ml-2" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          <br />

          {/* ✅ المنتجات */}
          <section className="py-10 px-4 flex justify-center">
            <div className="max-w-7xl w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOrderNow={handleOrderNow}
                    onCallNow={handleCallNow}
                  />
                ))}
              </div>
            </div>
          </section>

          <br />

          {/* ✅ تواصل معنا */}
          <section className="pt-6 py-14 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">لم تجد ما تبحث عنه؟</h2>
              <br />
              <p className="text-xl mb-6 text-white/90">
                تواصل معنا وسنساعدك في العثور على المنتج المثالي لاحتياجاتك
              </p>
              <br />

              {/* ✅ إصلاح typo: bg-blau-500 -> bg-blue-500 (تغيير لون فقط) */}
              <Button
                onClick={handleCallNow}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-3 rounded-full text-xl flex items-center justify-center w-full mx-auto"
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصل بنا الآن
              </Button>
            </motion.div>
            <br />
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
