"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaMinus, FaPlus } from 'react-icons/fa';
import Link from 'next/link';

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const t = useTranslations('products');
  const locale = useLocale();
  const { items, addToCart, updateQuantity, removeFromCart } = useCart();

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
    // Sweets & Hot Category
    {
      id: "bellamKommulu",
      category: "Sweets & Hot",
      image: "/products/sweets and hot/bellam kommulu.jpg",
      price: "₹350",
    },
    {
      id: "chegodilu",
      category: "Sweets & Hot",
      image: "/products/sweets and hot/chegodilu.jpg",
      price: "₹350",
    },
    {
      id: "bellamBoondi",
      category: "Sweets & Hot",
      image: "/products/sweets and hot/Bellam boondi.jpg",
      price: "₹350",
    },
    {
      id: "karamVerusenagalu",
      category: "Sweets & Hot",
      image: "/products/sweets and hot/Karam Verusenagalu.jpg",
      price: "₹350",
    },
    {
      id: "bellamMukkalu",
      category: "Sweets & Hot",
      image: "/products/sweets and hot/Bellam Mukkalu.jpg",
      price: "₹350",
    },
    {
      id: "atukuluMixture",
      category: "Sweets & Hot",
      image: "/products/sweets and hot/Atukulu Mixture.jpg",
      price: "₹350",
    },
    {
      id: "janthikalu",
      category: "Sweets & Hot",
      image: "/products/sweets and hot/janthikalu.jpg",
      price: "₹350",
    },
    {
      id: "masalaMixture",
      category: "Sweets & Hot",
      image: "/products/sweets and hot/Masala Mixture.jpg",
      price: "₹350",
    },
    {
      id: "masalaPapad",
      category: "Sweets & Hot",
      image: "/products/sweets and hot/Masala Papad.jpg",
      price: "₹350",
    },
    {
      id: "ringGavvalu",
      category: "Sweets & Hot",
      image: "/products/sweets and hot/Ring Gavvalu.jpg",
      price: "₹350",
    },
    {
      id: "sannaSev",
      category: "Sweets & Hot",
      image: "/products/sweets and hot/Sanna Sev.jpg",
      price: "₹350",
    },
    {
      id: "sunnundalu",
      category: "Sweets & Hot",
      image: "/products/sweets and hot/sunnundalu.jpg",
      price: "₹350",
    },
    {
      id: "verusenagaUndalu",
      category: "Sweets & Hot",
      image: "/products/sweets and hot/Verusenaga_Undalu.jpg",
      price: "₹350",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Get quantity of a product in cart
  const getProductQuantity = (productId: string): number => {
    const cartItem = items.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = (product: typeof products[0]) => {
    const priceNumber = parseInt(product.price.replace('₹', ''));
    addToCart({
      id: product.id,
      name: t(`${product.id}.name`),
      price: priceNumber,
      image: product.image,
    });
  };

  const handleIncrement = (product: typeof products[0]) => {
    const currentQty = getProductQuantity(product.id);
    if (currentQty === 0) {
      handleAddToCart(product);
    } else if (currentQty < 10) {
      updateQuantity(product.id, currentQty + 1);
    }
  };

  const handleDecrement = (productId: string) => {
    const currentQty = getProductQuantity(productId);
    if (currentQty === 1) {
      removeFromCart(productId);
    } else if (currentQty > 1) {
      updateQuantity(productId, currentQty - 1);
    }
  };

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
          {['All', 'Classic', 'Premium', 'Special', 'Sweets & Hot'].map((category, index) => (
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
              animate={{ opacity: 1, y: 0 }} // Always animate, remove isInView dependency for cards
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
                      <p className="text-xs text-gray-500">
                        {product.category === 'Sweets & Hot' ? t('perKg') : t('pack')}
                      </p>
                    </div>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="mt-auto flex flex-col gap-2">
                  {getProductQuantity(product.id) > 0 ? (
                    <div className="flex items-center justify-between gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDecrement(product.id)}
                        className="flex items-center justify-center w-10 h-10 bg-[var(--maroon)] text-white rounded-lg hover:bg-[var(--burgundy-800)] transition-all duration-300 shadow-md"
                      >
                        <FaMinus className="w-4 h-4" />
                      </motion.button>
                      
                      <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-lg py-2">
                        <span className="text-xl font-bold text-[var(--maroon)]">
                          {getProductQuantity(product.id)}
                        </span>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleIncrement(product)}
                        disabled={getProductQuantity(product.id) >= 10}
                        className="flex items-center justify-center w-10 h-10 bg-[var(--maroon)] text-white rounded-lg hover:bg-[var(--burgundy-800)] transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <FaPlus className="w-4 h-4" />
                      </motion.button>
                    </div>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAddToCart(product)}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold bg-[var(--maroon)] text-white hover:bg-[var(--burgundy-800)] transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <FaShoppingCart className="w-4 h-4" />
                      {t('addToCart')}
                    </motion.button>
                  )}
                    <Link
                      href={`/${locale}/cart`}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold bg-[var(--gold)] text-[var(--maroon)] border-2 border-[var(--gold)] hover:bg-[var(--gold-400)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
                    >
                      <FaShoppingCart className="w-4 h-4" />
                      {locale === 'te' ? 'కార్ట్ చూడండి' : 'View Cart'}
                    </Link>
                  </div>
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

