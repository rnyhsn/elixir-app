import React from 'react'

const ContactForm = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28">
        <h1 className="text-2xl text-primary font-semibold mb-4">Write to Us</h1>
        <form action="" className="flex flex-col gap-4">
            <input type="text" name="name" placeholder="Enter your name" className="py-2.5 px-5 border border-gray-300 rounded-md outline-none" />
            <input type="text" name="email" placeholder="Enter your email"  className="py-2.5 px-5 border border-gray-300 rounded-md outline-none" />
            <textarea name="" placeholder="Enter your description here"  className="py-2.5 px-5 border border-gray-300 rounded-md outline-none h-[200px]"></textarea>
            <button className="px-8 py-2.5 text-sm rounded-md text-white bg-primary w-max">Send Now</button>
        </form>
    </div>
  )
}

export default ContactForm
