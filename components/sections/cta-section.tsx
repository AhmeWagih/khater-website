"use client";

import { useTranslation } from "@/lib/i18n/use-translation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  const { t, locale } = useTranslation();

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            {t("contact.subtitle")}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            {t("contact.description")}
          </p>
          <Link href={`/${locale.code}/contact`}>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              {t("contact.form.submit")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}