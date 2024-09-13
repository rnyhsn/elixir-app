import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";


const ContactInfo = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28 grid grid-cols-3 gap-8">
      <div className="rounded-md bg-white shadow-md p-8">
        <h2 className="text-2xl text-primary font-semibold mb-2">Melbourne Office</h2>
        <div className="text-gray-600">
            <p>121 King Street,</p>
            <p>Melbourne 1200,</p>
            <p>Australia</p>
        </div>
      </div>
      <div className="rounded-md bg-white shadow-md p-8">
        <h2 className="text-2xl text-primary font-semibold mb-2">Sydney Office </h2>
        <div className="text-gray-600">
            <p>62 Collins Street West,</p>
            <p>Sydney 3000,</p>
            <p>Australia</p>
        </div>
      </div>
      <div className="rounded-md bg-white shadow-md p-8">
        <h2 className="text-2xl text-primary font-semibold mb-2">Socials</h2>
        <div className="flex gap-3 text-primary">
            <FaLinkedin className="text-2xl" />
            <FaTwitterSquare className="text-2xl" />
            <FaFacebookSquare className="text-2xl" />
            <FaGooglePlusSquare className="text-2xl" />
        </div>
      </div>
      
    </div>
  )
}

export default ContactInfo
