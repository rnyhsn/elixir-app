import CommonHero from '@/components/frontend/body/CommonHero'
import ContactForm from '@/components/frontend/body/contact/ContactForm'
import ContactInfo from '@/components/frontend/body/contact/ContactInfo'
import Warning from '@/components/frontend/body/contact/Warning'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-20 mb-20">
        <CommonHero />
        <ContactInfo />
        <Warning />
        <ContactForm />
    </div>
  )
}

export default ContactPage
