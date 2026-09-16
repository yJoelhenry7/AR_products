"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaHeart } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tProducts = useTranslations('products');

  const quickLinks = [
    { name: tNav('home'), href: "#home" },
    { name: tNav('products'), href: "#products" },
    { name: tNav('about'), href: "#about" },
    { name: tNav('occasions'), href: "#features" },
    { name: tNav('contact'), href: "#contact" },
  ];

  const popularSweets = [
    tProducts('traditional.name'),
    tProducts('karampodi.name'),
    tProducts('chocolate.name'),
    tProducts('kova.name'),
    tProducts('sugarFree.name'),
  ];

  const socialLinks = [
    { icon: <FaWhatsapp />, href: "https://wa.me/918500904835", label: "WhatsApp" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/venkateswara.traditional.foods", label: "Instagram" },
    { icon: <FaYoutube />, href: "https://youtube.com/@atreyapuramputharekulu4835", label: "YouTube" },
    { icon: <FaFacebook />, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[var(--maroon)] to-[var(--burgundy-900)] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, var(--gold) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-[var(--gold)] mb-1 font-serif">
              AR Products
            </h3>
            <p className="text-white/70 text-sm mb-4">
              by Venkateswara Products
            </p>
            <p className="text-white/80 mb-4 leading-relaxed">
              {t('tagline')}
            </p>
            <p className="text-[var(--gold)] font-semibold mb-6">
              V Ashok Kumar | 📦 Worldwide Door Delivery
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[var(--gold)] text-[var(--maroon)] rounded-full flex items-center justify-center hover:bg-[var(--gold-400)] transition-all duration-300 shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-[var(--gold)] mb-6">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[var(--gold)] transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all duration-300">
                      →
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Sweets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-[var(--gold)] mb-6">
              {t('products')}
            </h4>
            <ul className="space-y-3">
              {popularSweets.map((sweet, index) => (
                <li key={index}>
                  <a
                    href="#products"
                    className="text-white/80 hover:text-[var(--gold)] transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="mr-2 text-[var(--gold)]">✦</span>
                    {sweet}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-[var(--gold)] mb-6">
              {t('contactUs')}
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+918500904835"
                className="flex items-center gap-3 text-white/80 hover:text-[var(--gold)] transition-colors duration-300"
              >
                <MdPhone className="w-5 h-5 text-[var(--gold)]" />
                <span>+91 85009 04835</span>
              </a>
              <a
                href="mailto:venkateswara.foods@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-[var(--gold)] transition-colors duration-300"
              >
                <MdEmail className="w-5 h-5 text-[var(--gold)]" />
                <span>venkateswara.foods@gmail.com</span>
              </a>
              <a
                href="https://share.google/S7EGg1Pm9Sq9ffpg4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-[var(--gold)] transition-colors duration-300"
              >
                <MdLocationOn className="w-5 h-5 text-[var(--gold)]" />
                <span>{ t('location')}</span>
              </a>
              <div className="pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/918500904835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#20BA5A] transition-all duration-300 shadow-lg"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Order on WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/20 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {currentYear} AR Products by Venkateswara Products. {t('rights')}
            </p>
            <p className="text-white/70 text-sm flex items-center gap-2">
              Made with{" "}
              <FaHeart className="text-[var(--gold)] animate-pulse" /> in
              Atreyapuram, AP
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--gold)]/5 rounded-full blur-3xl"
      />
    </footer>
  );
}
