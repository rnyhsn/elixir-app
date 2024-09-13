import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


const Pagination = () => {
  return (
    <div className="flex mx-auto items-center text-lg">
        <div className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer"> <MdKeyboardDoubleArrowLeft /> </div>
        <div className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer"> 1 </div>
        <div className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer"> 2 </div>
        <div className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer"> 3 </div>
        <div className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer"> 4 </div>
        <div className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer"> 5 </div>
        <div className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer"> 6 </div>
        <div className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer"> <MdKeyboardDoubleArrowRight /> </div>
    </div>
  )
}

export default Pagination
