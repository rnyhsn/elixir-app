import CommonHero from '@/components/frontend/body/CommonHero'
import BrandSection from '@/components/frontend/body/home/BrandSection'
import ContactBanner from '@/components/frontend/body/home/ContactBanner'
import FeaturedSection from '@/components/frontend/body/home/FeaturedSection'
import ServiceSection from '@/components/frontend/body/home/ServiceSection'
import TestimonialSection from '@/components/frontend/body/home/TestimonialSection'
import React from 'react'

const ServicesPage = () => {
  return (
    <div className="flex flex-col gap-20">
        <CommonHero />
        <FeaturedSection title={""} />
        <ServiceSection title="Industries" />
        <ContactBanner />
        <TestimonialSection />
        <BrandSection />
    </div>
  )
}

export default ServicesPage
