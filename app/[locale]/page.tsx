import HeroSection from '@/components/sections/hero-section';
import IntroSection from '@/components/sections/intro-section';
import ServicesPreview from '@/components/sections/services-preview';
import PortfolioPreview from '@/components/sections/portfolio-preview';
import CTASection from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesPreview />
      <PortfolioPreview />
      <CTASection />
    </>
  );
}