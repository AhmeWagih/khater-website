'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/use-translation';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

export default function Footer() {
  const { t, locale } = useTranslation();
  
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="font-bold text-xl mb-4">ACME</h3>
            <p className="text-muted-foreground mb-4 max-w-xs">
              We create digital experiences that make a difference.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-bold mb-4">{t('navigation.home')}</h3>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${locale.code}${item === 'home' ? '' : `/${item}`}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`navigation.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">{t('services.title')}</h3>
            <ul className="space-y-2">
              {['webDevelopment', 'uiDesign', 'digitalMarketing', 'mobileDevelopment'].map((service) => (
                <li key={service}>
                  <Link
                    href={`/${locale.code}/services`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`services.items.${service}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="font-bold mb-4">{t('contact.title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-primary shrink-0 mr-3 rtl:ml-3 rtl:mr-0" />
                <span className="text-muted-foreground">123 Business Street, City, Country</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-primary shrink-0 mr-3 rtl:ml-3 rtl:mr-0" />
                <span className="text-muted-foreground">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-primary shrink-0 mr-3 rtl:ml-3 rtl:mr-0" />
                <span className="text-muted-foreground">info@example.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {year} ACME. {t('footer.rights')}
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}