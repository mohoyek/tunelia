import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import RiskSection from '@/components/sections/RiskSection';
import WhyUs from '@/components/sections/WhyUs';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="max-w-container mx-auto py-20 px-[5%] max-[640px]:py-14 max-[640px]:px-[6%]">
        <ServicesSection />
        <RiskSection />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
