import CommonHero from '@/components/frontend/body/CommonHero'
import NewsSection from '@/components/frontend/body/news-room/NewsSection'
import Pagination from '@/components/frontend/body/news-room/Pagination'
import React from 'react'

const NewsRoomPage = () => {
  return (
    <div className="flex flex-col gap-20 mb-20">
      <CommonHero />
      <NewsSection />
      <Pagination />
    </div>
  )
}

export default NewsRoomPage
