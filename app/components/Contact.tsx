"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { 
  MdBolt, 
  MdLock, 
  MdLocalShipping, 
  MdChat,
  MdCheckCircle 
} from "react-icons/md";
import { useTranslations } from 'next-intl';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const t = useTranslations('contact');

  // Replace with your actual WhatsApp Business number (format: country code + number without + or spaces)
  const whatsappNumber = "918500904835"; // Venkateswara Traditional Foods
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in ordering traditional Andhra sweets from AR Products by Venkateswara Products."
  );

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Call Us",
      detail: "+91 85009 04835",
      link: "tel:+918500904835",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email Us",
      detail: "venkateswara.foods@gmail.com",
      link: "mailto:venkateswara.foods@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Visit Us",
      detail: "Atreyapuram, Andhra Pradesh",
      link: "https://share.google/S7EGg1Pm9Sq9ffpg4",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[var(--burgundy-50)] to-white overflow-x-hidden"
    >
      {/* Background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-10 w-64 h-64 bg-[var(--gold)]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-[var(--maroon)]/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto w-full min-w-0 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 sm:px-6 py-2 bg-[var(--gold)]/20 border border-[var(--gold)]/50 rounded-full text-[var(--maroon)] text-xs sm:text-sm font-semibold tracking-wider mb-4"
          >
            {t('tag')}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--maroon)] mb-4 sm:mb-6 font-serif">
            {t('title')}
          </h2>
          <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center min-w-0">
          {/* Left Side - WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 min-w-0 w-full"
          >
            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-[var(--maroon)] to-[var(--burgundy-800)] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl text-center min-w-0"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 bg-[#25D366] rounded-full mb-4 sm:mb-6 shadow-xl"
              >
                <FaWhatsapp className="w-9 h-9 sm:w-14 sm:h-14 text-white" />
              </motion.div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                {t('whatsappTitle')}
              </h3>
              <p className="text-white/90 text-sm sm:text-lg mb-2">
                {t('whatsappDesc')}
              </p>
              <p className="text-white/70 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                Contact: V Ashok Kumar | Worldwide Door Delivery
              </p>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#25D366] text-white w-full sm:w-auto max-w-full px-4 sm:px-10 py-3.5 sm:py-5 rounded-full text-sm sm:text-lg font-bold hover:bg-[#20BA5A] transition-all duration-300 shadow-2xl whitespace-normal text-center"
              >
                <FaWhatsapp className="w-5 h-5 sm:w-7 sm:h-7 shrink-0" />
                <span className="leading-tight">{t('whatsappButton')}</span>
              </motion.a>

              <p className="text-white/70 text-xs sm:text-sm mt-5 sm:mt-6">
                Available: Mon-Sat, 9 AM - 8 PM
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-2 sm:gap-4 min-w-0"
            >
              {[
                { icon: <MdBolt className="w-6 h-6 sm:w-8 sm:h-8" />, text: "Instant Response" },
                { icon: <MdLock className="w-6 h-6 sm:w-8 sm:h-8" />, text: "Secure Payment" },
                { icon: <MdLocalShipping className="w-6 h-6 sm:w-8 sm:h-8" />, text: "Easy Tracking" },
                { icon: <MdChat className="w-6 h-6 sm:w-8 sm:h-8" />, text: "Chat Support" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-xl p-3 sm:p-6 shadow-lg border border-[var(--gold)]/20 text-center min-w-0"
                >
                  <div className="text-[var(--maroon)] mb-2 sm:mb-3 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-[var(--maroon)] font-semibold text-xs sm:text-base leading-snug">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 min-w-0 w-full"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl border border-[var(--gold)]/20 min-w-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--maroon)] mb-6 sm:mb-8 font-serif">
                {t('otherWays')}
              </h3>

              <div className="space-y-3 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                    href={info.link}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-[var(--burgundy-50)] transition-all duration-300 group min-w-0"
                  >
                    <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-[var(--maroon)] to-[var(--burgundy-700)] rounded-xl flex items-center justify-center text-[var(--gold)] group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">
                        {info.title}
                      </div>
                      <div className="text-sm sm:text-lg font-semibold text-[var(--maroon)] break-words">
                        {info.detail}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-[var(--gold)] to-[var(--gold-600)] rounded-2xl p-5 sm:p-8 shadow-xl text-center min-w-0"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-[var(--maroon)] mb-3 sm:mb-4">
                Operating Hours
              </h4>
              <div className="space-y-2 text-[var(--maroon)]">
                <p className="text-sm sm:text-lg leading-relaxed">
                  <strong>Monday - Saturday:</strong>
                  <span className="block sm:inline sm:ml-1">9:00 AM - 8:00 PM</span>
                </p>
                <p className="text-sm sm:text-lg">
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 sm:mt-16 text-center"
        >
            <div className="bg-[var(--burgundy-50)] rounded-2xl p-5 sm:p-8 max-w-4xl mx-auto min-w-0">
            <h4 className="text-xl sm:text-2xl font-bold text-[var(--maroon)] mb-4">
              How to Order?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--maroon)] text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold text-[var(--maroon)] mb-1 flex items-center gap-2">
                    <FaWhatsapp className="w-4 h-4" />
                    Click WhatsApp
                  </p>
                  <p className="text-gray-600 text-sm">
                    Open our catalog on WhatsApp
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--maroon)] text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold text-[var(--maroon)] mb-1 flex items-center gap-2">
                    <MdChat className="w-4 h-4" />
                    Select Items
                  </p>
                  <p className="text-gray-600 text-sm">
                    Choose your favorite sweets
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--maroon)] text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold text-[var(--maroon)] mb-1 flex items-center gap-2">
                    <MdCheckCircle className="w-4 h-4" />
                    Pay & Enjoy
                  </p>
                  <p className="text-gray-600 text-sm">
                    Make payment and we'll deliver
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
