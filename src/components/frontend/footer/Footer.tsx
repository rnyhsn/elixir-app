import Image from 'next/image';
import Link from 'next/link'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="">
      <div className="bg-slate-600 px-4 md:px-10 lg:px-20 xl:px-28 py-20 flex gap-10">

        <form action="" className="bg-primary py-16 px-14 rounded-md w-[50%]">
          <h2 className="text-white text-3xl font-semibold">Sign Up for email alerts</h2>
          <p className="text-white mb-6">Stay current with our latest insights</p>
          <div className="flex gap-4">
            <input type="text" placeholder="Enter E-mail Here" name="name" className="px-4 outline-none rounded-sm" />
            <button className="py-2.5 px-8 bg-secondary text-black font-semibold text-sm rounded-sm">Submit</button>
          </div>
        </form>
        <div className="w-[50%] ml-10 text-white flex gap-44">
          <div className="flex flex-col gap-2 text-[17px]">
            <Link href="/">Contact Us</Link>
            <Link href="/">FAQs</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Use</Link>
            <Link href="/">Global Office</Link>
            <Link href="/">Local Office</Link>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <div className="w-9 h-9 flex items-center justify-center bg-primary rounded-md">
                <FaLinkedinIn /> 
              </div>
              <span className="text-lg font-semibold">Linkedin</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-9 h-9 flex items-center justify-center bg-primary rounded-md">
                <FaTwitter /> 
              </div>
              <span className="text-lg font-semibold">Twitter</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-9 h-9 flex items-center justify-center bg-primary rounded-md">
                <FaFacebookF /> 
              </div>
              <span className="text-lg font-semibold">Facebook</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-9 h-9 flex items-center justify-center bg-primary rounded-md">
                <FaGooglePlusG /> 
              </div>
              <span className="text-lg font-semibold">Google+</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary px-4 md:px-10 lg:px-20 xl:px-28 py-8 flex justify-between">
        <Image src="/logo-light.png" alt="" width={100} height={60} />
        <div className="text-white font-semibold">
          &copy; Copyright 2020 - {new Date().getFullYear()}
        </div>
        <div className="text-white font-semibold">
          Designed By Rony
        </div>
      </div>
    </div>
  )
}

export default Footer
