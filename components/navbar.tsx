"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, XIcon } from "lucide-react";
import LocaleSwitcher from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";
import { useTranslation } from "@/lib/i18n/use-translation";
import { NavItem } from "@/lib/types";
import { motion } from "framer-motion";

export default function Navbar() {
  const { t, locale } = useTranslation();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const isHomePage = pathname === `/${locale.code}` || pathname === `/${locale.code}/`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { title: t("navigation.home"), href: `/${locale.code}` },
    { title: t("navigation.about"), href: `/${locale.code}/about` },
    { title: t("navigation.services"), href: `/${locale.code}/services` },
    { title: t("navigation.portfolio"), href: `/${locale.code}/portfolio` },
    { title: t("navigation.contact"), href: `/${locale.code}/contact` },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled || !isHomePage 
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href={`/${locale.code}`}
          className="font-bold text-xl tracking-tight"
        >
          <span className="sr-only">Brand</span>
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl">ACME</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-2",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
              {pathname === item.href && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  layoutId="navbar-indicator"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle Menu"
              >
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side={locale.dir === 'rtl' ? 'right' : 'left'} className="px-0">
              <div className="px-7 flex items-center justify-between mb-6">
                <div className="font-bold text-xl">ACME</div>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <XIcon className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "py-3 text-base font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}