"use client";

import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/lib/i18n/config';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { GlobeIcon } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/use-translation';

export default function LocaleSwitcher() {
  const { locale } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  
  const handleLocaleChange = (newLocale: string) => {
    // Extract the path after the current locale
    const currentLocalePath = `/${locale.code}`;
    let restOfPath = pathname;
    
    if (pathname.startsWith(currentLocalePath)) {
      restOfPath = pathname.substring(currentLocalePath.length) || '/';
    }
    
    // Construct the new path with the selected locale
    const newPath = `/${newLocale}${restOfPath === '/' ? '' : restOfPath}`;
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-transparent">
          <GlobeIcon className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => handleLocaleChange(l.code)}
            className={`${l.code === locale.code ? 'font-bold' : 'font-normal'}`}
          >
            {l.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}