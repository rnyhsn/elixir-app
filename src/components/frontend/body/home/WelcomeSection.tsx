import { FaChartBar } from "react-icons/fa";
import { MdOutlineNotifications } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import WelcomeCard from "./WelcomeCard";
import { MdGroups } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { BsLightningChargeFill } from "react-icons/bs";


import Image from "next/image";

const items = [
    {
        title: "Business Consulting",
        description: "Solution for every business related problems, readily and skillfully.",
        icon: <FaChartBar className="text-4xl" />
    },
    {
        title: "Risk Management",
        description: "Calculate every possible risk in your business, take control over them",
        icon: <MdOutlineNotifications className="text-4xl" />
    },
    {
        title: "Market Research",
        description: "Know the market before taking any step, reduce risks before you go.",
        icon: <FaRegLightbulb className="text-4xl" />
    },
    {
        title: "Quality Services",
        description: "Experience unparalleled service, from beginning to final construction.",
        icon: <FaHeadset className="text-4xl" />
    },
]

const WelcomeSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28 flex flex-col gap-20">
        <div className="flex items-center justify-center">
            <div className="">
                <h1 className="text-5xl text-primary font-bold text-center">Welcome to the Elixir</h1>
                <p className="text-center py-4 text-lg text-gray-700 w-[530px]">Get expert consultancy and support with Elixir, an advisory firm that stand by your side always.</p>
                <hr className="h-1 w-[70px] bg-primary mx-auto" />
            </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
        {
        items.map((item) => (
            <WelcomeCard item={item} key={item.title} />
        ))
        }
        </div>
        <div className="relative h-[550px] rounded-lg overflow-hidden">
            <Image src="/video-screenshot-2.jpg" alt="" className="object-cover" fill />
        </div>
        <div className="grid grid-cols-3 gap-12">
            <div className="shadow-lg py-8 px-6">
                <div className="flex items-center font-bold text-lg gap-2 text-primary mb-3">
                    <IoIosChatbubbles className="text-3xl" />
                    <h2 className="text-2xl font-semibold">Excellent Support</h2>
                </div>
                <div className="text-gray-600">
                If you face any trouble, you can always let our dedicated support team help you. They are ready for you 24/7.
                </div>
            </div>
            <div className="shadow-lg py-8 px-6">
                <div className="flex items-center font-bold text-lg gap-2 text-primary mb-3">
                    <MdGroups className="text-3xl" />
                    <h2 className="text-2xl font-semibold">Awesome Team</h2>
                </div>
                <div className="text-gray-600">
                Before talking destination, we shine a spotlight across your organization
                to fully understand it.
                </div>
            </div>
            <div className="shadow-lg py-8 px-6">
                <div className="flex items-center font-bold text-lg gap-2 text-primary mb-3">
                    <BsLightningChargeFill className="text-3xl" />
                    <h2 className="text-2xl font-semibold">Faster Performance</h2>
                </div>
                <div className="text-gray-600">
                We develop a systematic well-ordered process of analysis, from concept through implementation.
                </div>
            </div>
          
        </div>
    </div>
  )
}

export default WelcomeSection
