import Image from 'next/image'
import React from 'react'
import ReplyBox from './ReplyBox'
import CommentForm from './CommentForm'

const CommentSection = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-10">
        <h1 className="text-3xl text-primary font-bold mb-10">Top Comments</h1>
        <div className="flex gap-8">
          {/* Image Section */}
            <Image src="/portrait-8.jpg" alt="" width={80} height={80} className="rounded-full w-20 h-20 object-cover" />
          
          <div className="mb-2">
            {/* Comment Section */}
            <div className="pb-3 border-b border-gray-400">
                <div>
                  <h2 className="text-2xl text-primary font-bold">Post Heading</h2>
                  <p className="text-xs text-gray-500">May 15, 2017 at 9:33 am</p>
                </div>
                <div className="py-3 text-gray-700">
                Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!
                </div>
                <div className="flex items-end flex-col gap-2">
                  <button className="font-bold text-primary hover:underline hover:font-medium">Reply</button>
                  <ReplyBox />
                </div>
            </div>
            <div className="flex gap-8 mt-4">
          {/* Image Section */}
            <Image src="/portrait-4.jpg" alt="" width={80} height={80} className="rounded-full w-20 h-20 object-cover" />
          
          <div className="mb-2">
            {/* Comment Section */}
            <div className="pb-3 border-b border-gray-400">
                <div>
                  <h2 className="text-2xl text-primary font-bold">Post Heading</h2>
                  <p className="text-xs text-gray-500">May 15, 2017 at 9:33 am</p>
                </div>
                <div className="py-3 text-gray-700">
                Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!
                </div>
                <div className="flex justify-end">
                  <button className="font-bold text-primary hover:underline hover:font-medium">Reply</button>
                </div>
            </div>
          </div>
        </div>
          </div>
        </div>
        <div className="flex gap-8">
          {/* Image Section */}
            <Image src="/portrait-8.jpg" alt="" width={80} height={80} className="rounded-full w-20 h-20 object-cover" />
          
          <div className="mb-2">
            {/* Comment Section */}
            <div className="pb-3 border-b border-gray-400">
                <div>
                  <h2 className="text-2xl text-primary font-bold">Post Heading</h2>
                  <p className="text-xs text-gray-500">May 15, 2017 at 9:33 am</p>
                </div>
                <div className="py-3 text-gray-700">
                Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!
                </div>
                <div className="flex justify-end">
                  <button className="font-bold text-primary hover:underline hover:font-medium">Reply</button>
                </div>
            </div>
            <div className="flex gap-8 mt-4">
          {/* Image Section */}
            <Image src="/portrait-4.jpg" alt="" width={80} height={80} className="rounded-full w-20 h-20 object-cover" />
          
          <div className="mb-2">
            {/* Comment Section */}
            <div className="pb-3 border-b border-gray-400">
                <div>
                  <h2 className="text-2xl text-primary font-bold">Post Heading</h2>
                  <p className="text-xs text-gray-500">May 15, 2017 at 9:33 am</p>
                </div>
                <div className="py-3 text-gray-700">
                Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!
                </div>
                <div className="flex justify-end">
                  <button className="font-bold text-primary hover:underline hover:font-medium">Reply</button>
                </div>
            </div>
          </div>
        </div>
          </div>
        </div>
        <CommentForm />
    </div>
  )
}

export default CommentSection
