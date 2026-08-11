"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaWhatsapp, FaGift, FaBuilding, FaShippingFast, FaGlobeAsia, FaPhone } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";

export default function SpecialOffers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const offers = [
    {
      icon: <FaGift className="w-12 h-12" />,
      title: "Gift Hampers",
      description: "Beautifully packaged premium gift boxes with assorted sweets",
      features: ["Customizable packs", "Premium packaging", "Greeting cards included"],
      startingPrice: "₹999",
      color: "from-[var(--gold-600)] to-[var(--gold-700)]",
    },
    {
      icon: <FaBuilding className="w-12 h-12" />,
      title: "Corporate Gifting",
      description: "Bulk orders for corporate events, festivals, and celebrations",
      features: ["Minimum 50 packs", "Company branding option", "Timely delivery"],
      startingPrice: "₹25,000",
      color: "from-[var(--maroon)] to-[var(--burgundy-700)]",
    },
  ];

  return (
    <section
      id="special-offers"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-white to-[var(--burgundy-50)] overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 right-10 w-80 h-80 bg-[var(--gold)]/5 rounded-full blur-3xl"
      />

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
            className="inline-block px-6 py-2 bg-[var(--gold)]/20 border border-[var(--gold)]/50 rounded-full text-[var(--maroon)] text-sm font-semibold tracking-wider mb-4"
          >
            SPECIAL OFFERINGS
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--maroon)] mb-6 font-serif">
            Gift & Corporate Orders
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Make your celebrations memorable with our specially curated gift hampers
            and corporate gifting solutions.
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-[var(--gold)]/20">
                {/* Header with Icon */}
                <div className={`bg-gradient-to-r ${offer.color} p-8 text-white relative overflow-hidden`}>
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
                  />
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4"
                    >
                      {offer.icon}
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-white/90 text-lg">{offer.description}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    {offer.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-[var(--gold)]/20 rounded-full flex items-center justify-center">
                          <span className="text-[var(--gold)] text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm text-gray-600">Starting from</span>
                      <span className="text-3xl font-bold text-[var(--maroon)]">
                        {offer.startingPrice}
                      </span>
                    </div>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/918500904835"
                    className="block w-full bg-[var(--maroon)] text-white text-center py-4 rounded-xl font-bold hover:bg-[var(--burgundy-800)] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Inquire on WhatsApp
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[var(--maroon)] via-[var(--burgundy-800)] to-[var(--maroon)] rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--gold)] rounded-full">
                <MdCardGiftcard className="w-8 h-8 text-[var(--maroon)]" />
              </div>
              <h4 className="text-xl font-bold">Premium Packaging</h4>
              <p className="text-white/90">Elegant boxes with traditional designs</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--gold)] rounded-full">
                <FaShippingFast className="w-8 h-8 text-[var(--maroon)]" />
              </div>
              <h4 className="text-xl font-bold">Pan-India Delivery</h4>
              <p className="text-white/90">Safe delivery across all states</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--gold)] rounded-full">
                <FaWhatsapp className="w-8 h-8 text-[var(--maroon)]" />
              </div>
              <h4 className="text-xl font-bold">24/7 Support</h4>
              <p className="text-white/90">Quick responses on WhatsApp</p>
            </motion.div>
          </div>
        </motion.div>

        {/* International Orders Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-[var(--gold)]/10 border-2 border-[var(--gold)]/30 rounded-2xl px-8 py-6">
              <p className="text-[var(--maroon)] text-lg font-semibold mb-2 flex items-center justify-center gap-2">
                <FaGlobeAsia className="w-6 h-6" />
                International Orders Available
              </p>
              <p className="text-gray-700 mb-3">
                Worldwide door delivery by V Ashok Kumar
              </p>
              <p className="text-[var(--maroon)] font-bold flex items-center justify-center gap-2">
                <FaPhone className="w-4 h-4" />
                +91 85009 04835
              </p>
            </div>
          </motion.div>
      </div>
    </section>
  );
}
