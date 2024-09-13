import CommentSection from '@/components/frontend/body/news-room/CommentSection'
import PersonCard from '@/components/frontend/body/news-room/PersonCard'
import SingleNewsSection from '@/components/frontend/body/news-room/SingleNewsSection'
import Tags from '@/components/frontend/body/news-room/Tags'
import React from 'react'

const SingleNewPage = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28 flex gap-8 mt-40 mb-20">
      <div className="flex-[3] flex flex-col gap-10">
        <SingleNewsSection />
        <CommentSection />
      </div>
      <div className="flex-1">
        <PersonCard />
        <Tags />
      </div>
    </div>
  )
}

export default SingleNewPage
