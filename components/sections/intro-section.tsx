"use client";

import { useTranslation } from "@/lib/i18n/use-translation";
import { motion } from "framer-motion";

export default function IntroSection() {
  const { t } = useTranslation();

  const stats = [
    { label: t("home.intro.stats.clients"), value: "200+" },
    { label: t("home.intro.stats.projects"), value: "500+" },
    { label: t("home.intro.stats.awards"), value: "25+" },
    { label: t("home.intro.stats.experience"), value: "10+" },
  ];

  return (
    <section id="intro-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("home.intro.title")}
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                {t("home.intro.description")}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="p-4 rounded-lg bg-card">
                    <p className="text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team working"
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}