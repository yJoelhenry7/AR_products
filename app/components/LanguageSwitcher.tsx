"use client";

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { MdLanguage } from 'react-icons/md';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'te' : 'en';
    
    startTransition(() => {
      router.push(`/${newLocale}`);
      router.refresh();
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      disabled={isPending}
      className="flex items-center gap-2 px-4 py-2 bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--maroon)] transition-all duration-300 font-semibold disabled:opacity-50"
      aria-label="Switch language"
    >
      <MdLanguage className="w-5 h-5" />
      <span className="text-sm">{locale === 'en' ? 'తెలుగు' : 'English'}</span>
    </motion.button>
  );
}
