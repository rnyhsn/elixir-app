import Image from 'next/image'
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";


const items = [
    {
        title: "We Are Professional",
        description: "We resource, train, speak, mentor and encourage; marketplace leaders, business owners and career professionals to be effective in the workplace.",
        icon: <BsFillChatDotsFill/>
    },
    {
        title: "We Are Creative",
        description: "With so many factors to consider when deciding how to characterize your company , wouldn’t it be great to have a group of forward-thinking, well-informed individuals on board who know what they’re doing?",
        icon: <FaChartPie />
    },
    {
        title: "24/7 Great Support",
        description: "Design clever and compelling marketing strategies, improve product positioning, and drive conversion rates, Elixir is all time available to guide you.",
        icon: <GoClockFill />
    },
]

const FeaturedSection = ({title}: {title: string}) => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28">
    {
        title && (
            <>
            <h1 className="text-center text-4xl font-bold text-primary mb-3"> {title} </h1>
            <hr className="h-1 bg-primary w-20 mx-auto" />
            </>
        )
    }
        <div className="flex mt-20">
            <div className="relative w-1/2 rounded-xl overflow-hidden">
                <Image src="/why-choose-us.jpg" alt="" className="" fill />
            </div>
            <div className="w-1/2 px-14">
            {
                items.map((item, index) => (
                    <div key={index}>
                        <div className="flex items-center gap-5 font-bold text-2xl text-primary mb-4" >
                            {item.icon}  <span> {item.title} </span>
                        </div>
                        <div className="text-gray-600 mb-10">
                            {item.description}
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default FeaturedSection
