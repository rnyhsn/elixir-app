import React from 'react'

const ReplyBox = () => {
  return (
    <div className="flex gap-4 items-end w-full">
      <textarea placeholder="Write Here..." name="reply" className="h-14 p-2 flex-1 border-2 rounded-md border-gray-300 focus:border-gray-500 outline-none" />
      <button className="px-6 py-1.5 text-sm rounded-md bg-primary text-white h-max"> Send </button>
    </div>
  )
}

export default ReplyBox
