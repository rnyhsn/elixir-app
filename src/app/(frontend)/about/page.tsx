import CeoMessage from '@/components/frontend/body/about/CeoMessage'
import Overview from '@/components/frontend/body/about/Overview'
import CommonHero from '@/components/frontend/body/CommonHero'
import Expertize from '@/components/frontend/body/home/Expertize'
import LeaderShipSection from '@/components/frontend/body/home/LeaderShipSection'

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-20 mb-20">
      <CommonHero />
      <CeoMessage />
      <Overview />
      <Expertize />
      <LeaderShipSection />
    </div>
  )
}

export default AboutPage
