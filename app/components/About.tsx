"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GiCook, GiWheat, GiHeartInside } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import { useTranslations } from 'next-intl';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const t = useTranslations('about');

  const features = [
    {
      icon: <GiCook className="w-12 h-12" />,
      title: t('handcrafted'),
      description: t('handcraftedDesc'),
    },
    {
      icon: <GiWheat className="w-12 h-12" />,
      title: "Premium Ingredients",
      description: "We use only the finest quality ingredients - pure ghee, organic jaggery, and farm-fresh produce.",
    },
    {
      icon: <GiHeartInside className="w-12 h-12" />,
      title: t('handcrafted'),
      description: t('handcraftedDesc'),
    },
    {
      icon: <MdVerified className="w-12 h-12" />,
      title: t('certified'),
      description: t('certifiedDesc'),
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-[var(--burgundy-50)] to-white overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-48 -right-48 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-48 -left-48 w-96 h-96 bg-[var(--maroon)]/5 rounded-full blur-3xl"
      />

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
            className="inline-block px-6 py-2 bg-[var(--gold)]/20 border border-[var(--gold)]/50 rounded-full text-[var(--maroon)] text-sm font-semibold tracking-wider mb-4"
          >
            {t('tag')}
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--maroon)] mb-6 font-serif">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('story')}
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-[var(--maroon)] font-serif">
              Our Heritage
            </h3>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                {t('story')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[var(--maroon)] to-[var(--burgundy-800)] rounded-3xl p-8 md:p-12 shadow-2xl">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--gold)] rounded-full opacity-20 blur-xl"
              />
              <div className="relative space-y-6 text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="text-[var(--gold)] inline-flex items-center justify-center w-24 h-24 mx-auto"
                >
                  <GiCook className="w-full h-full" />
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  {t('celebrating')}
                </h4>
                <p className="text-white/90 text-lg">
                  {t('story')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--maroon)] text-center mb-12 font-serif">
            Why Choose Us
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[var(--gold)]/20 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--maroon)] to-[var(--burgundy-700)] rounded-full text-[var(--gold)] mb-6"
                >
                  {feature.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-[var(--maroon)] mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
