import BrandSection from "@/components/frontend/body/home/BrandSection";
import ContactBanner from "@/components/frontend/body/home/ContactBanner";
import Expertize from "@/components/frontend/body/home/Expertize";
import FeaturedSection from "@/components/frontend/body/home/FeaturedSection";
import Hero from "@/components/frontend/body/home/Hero";
import LatestNewSection from "@/components/frontend/body/home/LatestNewSection";
import LeaderShipSection from "@/components/frontend/body/home/LeaderShipSection";
import MessageSection from "@/components/frontend/body/home/MessageSection";
import OfferSection from "@/components/frontend/body/home/OfferSection";
import ServiceSection from "@/components/frontend/body/home/ServiceSection";
import TestimonialSection from "@/components/frontend/body/home/TestimonialSection";
import WelcomeSection from "@/components/frontend/body/home/WelcomeSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 mb-20">
      <Hero />
      <WelcomeSection />
      <ServiceSection title="Our Services" />
      <FeaturedSection title="Why Choose Elixir" />
      <ContactBanner />
      <OfferSection />
      <MessageSection />
      <LeaderShipSection />
      <Expertize />
      <TestimonialSection />
      <BrandSection />
      <LatestNewSection />
    </div>
  );
}
