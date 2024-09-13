import React from 'react'

const MessageSection = () => {
  return (
    <div className="bg-primary text-white px-4 md:px-10 lg:px-20 xl:px-28 py-32 flex gap-16 items-center">
      <div className="w-[35%]">
        <div className="p-10 border-2 border-secondary rounded-md">
            <h1 className="text-3xl font-bold mb-4">Request a Call back</h1>
            <p className="text-center">Would you like to speak to one of our financial advisers over the phone? Just submit your details and we’ll be in touch shortly. You can also email us if you would prefer.</p>
        </div>
      </div>
      <div className="w-[65%]">
        <h1 className="text-2xl font-semibold mb-6">I would like to discuss:</h1>
        <form action="" className="grid grid-cols-2 gap-x-5 gap-y-6">
            <input type="text" className="py-2.5 px-4 bg-white rounded-sm outline-none" placeholder="Your Name" />
            <input type="text" className="py-2.5 px-4 bg-white rounded-sm outline-none" placeholder="Your E-mail" />
            <input type="text" className="py-2.5 px-4 bg-white rounded-sm outline-none" placeholder="Subject" />
            <input type="submit" className="py-2.5 px-4 bg-secondary text-black rounded-sm font-semibold" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default MessageSection
