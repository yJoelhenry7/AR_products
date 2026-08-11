"use client";

import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { GiCupcake } from "react-icons/gi";
import { MdVerified, MdStar } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--maroon)] via-[var(--burgundy-800)] to-[var(--burgundy-900)]"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, var(--gold) 1px, transparent 1px),
                            radial-gradient(circle at 80% 80%, var(--gold) 1px, transparent 1px),
                            radial-gradient(circle at 40% 20%, var(--gold) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 w-32 h-32 bg-[var(--gold)]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-[var(--gold)]/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-6 py-2 bg-[var(--gold)]/20 backdrop-blur-sm border border-[var(--gold)]/50 rounded-full text-[var(--gold)] text-sm md:text-base font-semibold tracking-wider"
            >
              <span className="inline-flex items-center gap-2">
                <GiCupcake className="w-5 h-5" />
                {t('tagline')}
              </span>
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif leading-tight">
              {t('title')}
              <span className="block text-[var(--gold)] mt-2">
                {t('subtitle')}
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#products"
              className="bg-[var(--gold)] text-[var(--maroon)] px-10 py-4 rounded-full text-lg font-bold hover:bg-[var(--gold-400)] transition-all duration-300 shadow-2xl inline-flex items-center gap-2"
            >
              {t('exploreButton')}
              <HiArrowDown className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-transparent border-2 border-[var(--gold)] text-[var(--gold)] px-10 py-4 rounded-full text-lg font-bold hover:bg-[var(--gold)] hover:text-[var(--maroon)] transition-all duration-300 inline-flex items-center gap-2"
            >
              {t('orderButton')}
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 max-w-4xl mx-auto pt-16"
          >
            {[
              { number: "20+", label: t('varieties'), icon: <GiCupcake className="w-8 h-8" /> },
              { number: "100%", label: t('pureFresh'), icon: <MdVerified className="w-8 h-8" /> },
              { number: "5000+", label: t('customers'), icon: <MdStar className="w-8 h-8" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-3 text-[var(--gold)]">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-5xl font-bold text-[var(--gold)] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* International Orders Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12"
          >
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
              <p className="text-white text-sm md:text-base flex items-center gap-2">
                <FaGlobeAsia className="w-5 h-5" />
                {t('worldwideShipping')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <HiArrowDown className="w-8 h-8 text-[var(--gold)]" />
      </motion.div>
    </section>
  );
}
