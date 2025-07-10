import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n/config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale.code}/`) && pathname !== `/${locale.code}`
  );
  
  // If there's no locale in the pathname, redirect to the default locale
  if (pathnameIsMissingLocale) {
    // If the request is to the root, redirect to the default locale
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${defaultLocale.code}`, request.url));
    }
    
    // For other paths, add the default locale prefix
    return NextResponse.redirect(
      new URL(`/${defaultLocale.code}${pathname}`, request.url)
    );
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};