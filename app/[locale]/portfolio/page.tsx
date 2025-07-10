"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n/use-translation";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { PortfolioItem } from "@/lib/types";

const ITEMS_PER_PAGE = 6;

export default function PortfolioPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { id: "all", label: t("portfolio.categories.all") },
    { id: "web", label: t("portfolio.categories.web") },
    { id: "mobile", label: t("portfolio.categories.mobile") },
    { id: "branding", label: t("portfolio.categories.branding") },
    { id: "ecommerce", label: t("portfolio.categories.ecommerce") },
  ];

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
    {
      id: "project-4",
      title: "Restaurant Website",
      description: "Modern website with online ordering system and table reservations.",
      category: "web",
      imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "project-5",
      title: "Fashion E-commerce App",
      description: "Mobile app for a fashion brand with AR try-on features.",
      category: "mobile",
      imageUrl: "https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "project-6",
      title: "Tech Blog Platform",
      description: "Content-focused website with modern design and excellent readability.",
      category: "web",
      imageUrl: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "project-7",
      title: "Fitness Tracking App",
      description: "Mobile application for tracking workouts and nutrition with social features.",
      category: "mobile",
      imageUrl: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "project-8",
      title: "Real Estate Platform",
      description: "Property listing website with advanced search and virtual tours.",
      category: "web",
      imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "project-9",
      title: "Healthcare Portal",
      description: "Patient management system with telemedicine capabilities.",
      category: "web",
      imageUrl: "https://images.pexels.com/photos/3846035/pexels-photo-3846035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with scale effect */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
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
              {t("portfolio.title")}
            </h1>
            <p className="text-xl text-white/80">
              {t("portfolio.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Portfolio Items Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {paginatedItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-xl bg-card shadow-md hover:shadow-lg"
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
                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <Button variant="ghost" size="sm" className="group">
                      {t("portfolio.viewProject")}
                      <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:ml-0 rtl:mr-2 rtl:group-hover:-translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}