"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n/use-translation";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ServiceItem } from "@/lib/types";

export default function ServicesPage() {
  const { t, locale } = useTranslation();

  const services: ServiceItem[] = [
    {
      id: "web-development",
      title: t("services.items.webDevelopment.title"),
      description: t("services.items.webDevelopment.description"),
      icon: "🌐",
    },
    {
      id: "ui-design",
      title: t("services.items.uiDesign.title"),
      description: t("services.items.uiDesign.description"),
      icon: "🎨",
    },
    {
      id: "digital-marketing",
      title: t("services.items.digitalMarketing.title"),
      description: t("services.items.digitalMarketing.description"),
      icon: "📈",
    },
    {
      id: "mobile-development",
      title: t("services.items.mobileDevelopment.title"),
      description: t("services.items.mobileDevelopment.description"),
      icon: "📱",
    },
    {
      id: "ecommerce",
      title: t("services.items.eCommerce.title"),
      description: t("services.items.eCommerce.description"),
      icon: "🛍️",
    },
    {
      id: "content-strategy",
      title: t("services.items.contentStrategy.title"),
      description: t("services.items.contentStrategy.description"),
      icon: "📝",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("services.title")}
            </h1>
            <p className="text-xl text-white/80">
              {t("services.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Button variant="ghost" className="group">
                  Learn More
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:ml-0 rtl:mr-2 rtl:group-hover:-translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">{t("contact.subtitle")}</h2>
            <p className="text-primary-foreground/80 mb-8">
              {t("contact.description")}
            </p>
            <Link href={`/${locale.code}/contact`}>
              <Button 
                variant="secondary"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                {t("contact.form.submit")}
                <ArrowRightIcon className="ml-2 h-4 w-4 rtl:ml-0 rtl:mr-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}