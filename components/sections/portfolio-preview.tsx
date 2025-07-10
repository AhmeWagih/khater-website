"use client";

import { useTranslation } from "@/lib/i18n/use-translation";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PortfolioItem } from "@/lib/types";

export default function PortfolioPreview() {
  const { t, locale } = useTranslation();

  const portfolioItems: PortfolioItem[] = [
    {
      id: "project-1",
      title: "Modern E-commerce Platform",
      description: "A fully responsive online store with advanced features and seamless user experience.",
      category: "ecommerce",
      imageUrl: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "project-2",
      title: "Corporate Brand Identity",
      description: "Complete brand redesign for a multinational company including logo, colors, and brand assets.",
      category: "branding",
      imageUrl: "https://images.pexels.com/photos/5849597/pexels-photo-5849597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "project-3",
      title: "Mobile Banking Application",
      description: "Secure and intuitive mobile banking application with biometric authentication.",
      category: "mobile",
      imageUrl: "https://images.pexels.com/photos/6214472/pexels-photo-6214472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("portfolio.description")}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href={`/${locale.code}/portfolio`}>
            <Button variant="outline" size="lg">
              {t("navigation.portfolio")}
              <ArrowRightIcon className="ml-2 h-4 w-4 rtl:ml-0 rtl:mr-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const { t } = useTranslation();
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className="group relative overflow-hidden rounded-xl bg-card shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <span className="inline-block text-xs uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded mb-3">
          {t(`portfolio.categories.${item.category}`)}
        </span>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {item.description}
        </p>
        <Button variant="ghost" size="sm" className="px-0 text-primary">
          {t("portfolio.viewProject")}
          <ArrowRightIcon className="ml-1 h-4 w-4 rtl:ml-0 rtl:mr-1" />
        </Button>
      </div>
    </motion.div>
  );
}