import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


const PersonCard = () => {
  return (
    <div className="bg-white shadow-md px-8 py-10 rounded-xl flex flex-col gap-4">
      <Image src="/portrait-8.jpg" alt="" className="h-28 w-28 rounded-full object-cover mx-auto" width={80} height={80} />

        <h1 className="text-2xl text-primary font-bold text-center capitalize">thomas been</h1>
        <p className="text-center text-gray-500">Flattering high rise easy care flared fit - cut straight leg that flares at the ankle comfy tight. Regular fit viscose elastane leather black wool.</p>
        <div className="flex gap-3 text-gray-300 text-3xl justify-center">
            <FaLinkedin />
            <FaTwitterSquare />
            <FaFacebookSquare />
        </div>
    </div>
  )
}

export default PersonCard
