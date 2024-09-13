import { MdKeyboardArrowRight } from "react-icons/md";


const Hero = () => {
  return (
    <div className="h-screen w-screen bg-[url('/header-5.jpg')] bg-cover bg-no-repeat flex items-center">
        <div className="flex flex-col pl-28 gap-10 mt-20">
            <h1 className="text-7xl text-primary font-bold">Expert Consultants</h1>
            <p className="text-2xl tracking-wider w-[600px]">Over 10 years of experience in helping clients finding comprehensive solutions.</p>
            <div className="flex gap-4">
                <button className="py-2.5 px-8 font-semibold text-sm text-white rounded-sm bg-primary flex items-center gap-1">Read More <MdKeyboardArrowRight /></button>
                <button className="py-2.5 px-8 font-semibold text-sm text-black rounded-sm bg-secondary flex items-center gap-1">Contact Us <MdKeyboardArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Hero
