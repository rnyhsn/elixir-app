"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const CommonHero = () => {
    const pathname = usePathname();
    const title = pathname.slice(1).replace("-", " ");
  return (
    <div className="h-[500px]" style={{backgroundImage: "url('/background-2.jpg')", backgroundRepeat: "no-repeat", backgroundSize: '100% 100%'}}>
        <div className="h-full w-full flex items-center" style={{background: "rgba(0,0,0, 0.3)"}}>
           <div className="ml-20 mt-20">
                <h1 className="text-7xl mb-4 text-white font-bold capitalize"> {title} </h1>
                <h2 className="flex gap-4 items-center text-white text-2xl font-semibold"> <Link href="/" className="hover:text-primary">Home</Link>  <MdKeyboardDoubleArrowRight /> <span className="capitalize">{title}</span> </h2>
           </div>
        </div>
    </div>
  )
}

export default CommonHero
