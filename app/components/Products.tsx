"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const t = useTranslations('products');

  const products = [
    {
      id: "karampodi",
      category: "Premium",
      image: "/putharekulu/karampodi_putharekhulu.jpg",
      price: "₹300",
    },
    {
      id: "chocolate",
      category: "Premium",
      image: "/putharekulu/choclate_putharekhulu.jpg",
      price: "₹300",
    },
    {
      id: "jaggeryDryFruits",
      category: "Classic",
      image: "/putharekulu/bellam_dry_fruits_putharekhulu.jpg",
      price: "₹300",
    },
    {
      id: "sugarDryFruits",
      category: "Classic",
      image: "/putharekulu/sugar_dry_fruits_putharekhulu.jpg",
      price: "₹300",
    },
    {
      id: "kova",
      category: "Premium",
      image: "/putharekulu/kova_putharekhulu.jpg",
      price: "₹300",
    },
    {
      id: "samosa",
      category: "Premium",
      image: "/putharekulu/samosa_putharekhulu.jpg",
      price: "₹300",
    },
    {
      id: "horlicksBoost",
      category: "Premium",
      image: "/putharekulu/horlicks_and_boost_putharekhulu.jpg",
      price: "₹300",
    },
    {
      id: "sugarFree",
      category: "Special",
      image: "/putharekulu/diet_sugar_putharekhulu.jpg",
      price: "₹300",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="products"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-white to-[var(--burgundy-50)] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, var(--maroon) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-[var(--maroon)]/10 border border-[var(--maroon)]/30 rounded-full text-[var(--maroon)] text-sm font-semibold tracking-wider mb-4"
          >
            {t('sectionTag')}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--maroon)] mb-6 font-serif">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {['All', 'Classic', 'Premium', 'Special'].map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[var(--maroon)] text-white shadow-lg"
                  : "bg-white text-[var(--maroon)] border-2 border-[var(--maroon)]/30 hover:border-[var(--maroon)] hover:shadow-md"
              }`}
            >
              {t(`category${category}`)}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-[var(--gold)]/20 flex flex-col h-full">
                {/* Product Image */}
                <div className="relative bg-gradient-to-br from-[var(--burgundy-50)] to-[var(--gold-50)] p-8 flex items-center justify-center h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={product.image}
                      alt={t(`${product.id}.name`)}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  <div className="absolute top-4 right-4 bg-[var(--gold)] text-[var(--maroon)] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {t(`category${product.category}`)}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[var(--maroon)] mb-2 group-hover:text-[var(--gold-700)] transition-colors duration-300">
                    {t(`${product.id}.name`)}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
                    {t(`${product.id}.description`)}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-[var(--gold-700)]">
                        {product.price}
                      </span>
                      <p className="text-xs text-gray-500">{t('pack')}</p>
                    </div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="block w-full bg-[var(--maroon)] text-white text-center py-3 rounded-lg font-semibold hover:bg-[var(--burgundy-800)] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {t('orderButton')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-6">
            {t('bulkOrderText')}
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block bg-[var(--gold)] text-[var(--maroon)] px-10 py-4 rounded-full text-lg font-bold hover:bg-[var(--gold-400)] transition-all duration-300 shadow-xl"
          >
            {t('catalogButton')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

