import React from 'react'

const CommentForm = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-primary mb-5">Leave a Comment</h1>
      <form action="" className="flex flex-col gap-4" >
        <input type="text" name="name" placeholder='You Name' className="py-2.5 px-4 border border-gray-300 focus:border-2 focus:border-gray-500 outline-none rounded-md" />
        <input type="text" name="name" placeholder='You Email' className="py-2.5 px-4 border border-gray-300 focus:border-2 focus:border-gray-500 outline-none rounded-md"/>
        <textarea name="comment" placeholder='Write your opinion here...' className="py-2.5 px-4 border h-[150px] border-gray-300 focus:border-2 focus:border-gray-500 outline-none rounded-md"/>
        <button className="py-2.5 px-8 bg-primary text-white rounded-md text-sm w-max">Submit Comment</button>
      </form>
    </div>
  )
}

export default CommentForm
