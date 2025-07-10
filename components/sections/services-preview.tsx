"use client";

import { useTranslation } from "@/lib/i18n/use-translation";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceItem } from "@/lib/types";

export default function ServicesPreview() {
  const { t, locale } = useTranslation();

  const services: ServiceItem[] = [
    {
      id: "web-development",
      title: t("services.items.webDevelopment.title"),
      description: t("services.items.webDevelopment.description"),
      icon: "code",
    },
    {
      id: "ui-design",
      title: t("services.items.uiDesign.title"),
      description: t("services.items.uiDesign.description"),
      icon: "layout",
    },
    {
      id: "digital-marketing",
      title: t("services.items.digitalMarketing.title"),
      description: t("services.items.digitalMarketing.description"),
      icon: "trending-up",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href={`/${locale.code}/services`}>
            <Button variant="outline" size="lg">
              {t("navigation.services")}
              <ArrowRightIcon className="ml-2 h-4 w-4 rtl:ml-0 rtl:mr-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}