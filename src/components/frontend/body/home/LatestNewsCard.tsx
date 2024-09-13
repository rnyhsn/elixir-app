import Image from 'next/image'
import Link from 'next/link';
import { FaLongArrowAltRight } from "react-icons/fa";


const LatestNewsCard = ({item}: {item: {title: string, name: string, description: string, img: string}}) => {
  return (
    <Link href={`/news-room/dfdfgdf`} className="rounded-t-md overflow-hidden shadow-md">
        <div className="relative h-[220px]">
            <Image src={item.img} alt="" className="object-cover" fill />
        </div>
        <div className="p-5 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-primary"> {item.title} </h2>
            <p className="text-gray-600 text-lg"> {item.name} </p>
            <p className="text-gray-700 mt-4"> {item.description} </p>
            <button className="text-primary flex gap-2 items-center font-semibold"> <span className="hover:underline">Learn More</span> <FaLongArrowAltRight />  </button>
        </div>
    </Link>
  )
}

export default LatestNewsCard
