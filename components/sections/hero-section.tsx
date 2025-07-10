"use client";

import { useTranslation } from "@/lib/i18n/use-translation";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { t } = useTranslation();

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("intro-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with scale effect */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1.2 }}
        animate={{
          scale: 1,
          transition: { duration: 10, ease: "easeOut" },
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t("home.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            {t("home.hero.subtitle")}
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {t("home.hero.cta")}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDownIcon className="h-10 w-10 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}