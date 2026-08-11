"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MdCelebration,
  MdLocalShipping,
  MdStar,
  MdCardGiftcard,
} from "react-icons/md";
import { GiPartyPopper, GiIndianPalace } from "react-icons/gi";
import { FaBirthdayCake, FaHeart } from "react-icons/fa";
import { useTranslations } from 'next-intl';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const t = useTranslations('features');

  const categories = [
    {
      icon: <MdCelebration className="w-10 h-10" />,
      title: "Sankranti Delights",
      description: "Special sweets for Makar Sankranti festival",
      color: "from-[var(--maroon)] to-[var(--burgundy-700)]",
    },
    {
      icon: <FaBirthdayCake className="w-10 h-10" />,
      title: "Birthday Celebrations",
      description: "Make every birthday sweeter",
      color: "from-[var(--gold-600)] to-[var(--gold-700)]",
    },
    {
      icon: <FaHeart className="w-10 h-10" />,
      title: "Wedding Sweets",
      description: "Traditional wedding delicacies & bulk orders",
      color: "from-[var(--burgundy-600)] to-[var(--maroon)]",
    },
    {
      icon: <MdCardGiftcard className="w-10 h-10" />,
      title: "Corporate Gifting",
      description: "Premium gift hampers for businesses",
      color: "from-[var(--gold-500)] to-[var(--gold-600)]",
    },
    {
      icon: <GiPartyPopper className="w-10 h-10" />,
      title: "Festival Specials",
      description: "Diwali, Ugadi, Dasara & more",
      color: "from-[var(--maroon)] to-[var(--burgundy-800)]",
    },
    {
      icon: <GiIndianPalace className="w-10 h-10" />,
      title: "Temple Offerings",
      description: "Pure prasadam quality sweets",
      color: "from-[var(--gold-700)] to-[var(--gold-800)]",
    },
  ];

  const benefits = [
    {
      icon: <MdLocalShipping className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Fresh sweets delivered to your doorstep",
    },
    {
      icon: <MdStar className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Only the finest ingredients used",
    },
    {
      icon: <MdCelebration className="w-8 h-8" />,
      title: "Custom Orders",
      description: "Special requests welcomed",
    },
  ];

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-white to-[var(--burgundy-50)] overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(45deg, var(--maroon) 25%, transparent 25%, transparent 75%, var(--maroon) 75%, var(--maroon)), 
                            linear-gradient(45deg, var(--maroon) 25%, transparent 25%, transparent 75%, var(--maroon) 75%, var(--maroon))`,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-[var(--maroon)]/10 border border-[var(--maroon)]/30 rounded-full text-[var(--maroon)] text-sm font-semibold tracking-wider mb-4"
          >
            {t('tag')}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--maroon)] mb-6 font-serif">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--gold)]/20 overflow-hidden">
                {/* Gradient overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl text-white mb-6 shadow-lg`}
                  >
                    {category.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-[var(--maroon)] mb-3 group-hover:text-[var(--gold-700)] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-gradient-to-r from-[var(--maroon)] to-[var(--gold)] mt-6 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[var(--maroon)] to-[var(--burgundy-800)] rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="flex items-start gap-4 text-white"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-14 h-14 bg-[var(--gold)] rounded-xl flex items-center justify-center text-[var(--maroon)] shadow-lg"
                >
                  {benefit.icon}
                </motion.div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                  <p className="text-white/90">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block bg-[var(--gold)] text-[var(--maroon)] px-12 py-4 rounded-full text-lg font-bold hover:bg-[var(--gold-400)] transition-all duration-300 shadow-xl"
          >
            {t('orderButton')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
