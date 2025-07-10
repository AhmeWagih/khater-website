import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n/config';

export default function Home() {
  // Redirect to the default locale
  redirect(`/${defaultLocale.code}`);
}