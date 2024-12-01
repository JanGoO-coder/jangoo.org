import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "JanGoO",
  description: "Inovation Driven by Purpose",
  openGraph: {
    type: "website",
    url: "https://jangoo.org",
    title: "JanGoO",
    description: "Inovation Driven by Purpose",
    images: [
      {
        url: "https://www.jangoo.org/img/Logo-light.svg",
        alt: "JanGoO LOGO",
      },
    ],
  },
  twitter: {
    card: "jangoo_org",
    site: "https://jangoo.org",
    title: "JanGoO",
    description: "Inovation Driven by Purpose",
    images: [
      "https://www.jangoo.org/img/Logo-light.svg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
