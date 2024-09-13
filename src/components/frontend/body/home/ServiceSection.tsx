import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";


const ServiceSection = ({title}: {title: string}) => {
  return (
    <div className="py-20 bg-gray-100 px-4 md:px-10 lg:px-20 xl:px-28">
    {
        title && (
            <div>
                <h1 className="text-5xl text-primary font-bold text-center mb-4"> {title} </h1>
                <hr className="h-1 w-[70px] bg-primary mx-auto" />
            </div>

        )
    }
      <div className="mt-10">
        <div className="flex even:flex-row-reverse bg-gray-50 rounded-md overflow-hidden">
            <div className="w-1/2 bg-[url('/6.jpg')] bg-no-repeat bg-cover bg-center h-[450px]">
                
            </div>
            <div className="w-1/2 flex flex-col gap-5 justify-center p-10 relative">
                <div className="w-8 h-8 bg-gray-50 absolute rotate-45 -left-4"></div>
                <h2 className="text-2xl font-bold text-primary">Business Consulting</h2>
                <p className="text-gray-600 text-lg">As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.</p>
                <div className="flex gap-1.5 items-center text-lg">
                    <button className="hover:underline">Learn More</button> <FaArrowRightLong />
                </div>
            </div>
        </div>
        <div className="flex even:flex-row-reverse bg-gray-50 rounded-md overflow-hidden">
            <div className="w-1/2 bg-[url('/7.jpg')] bg-no-repeat bg-cover bg-center h-[450px]">
                
            </div>
            <div className="w-1/2 flex flex-col gap-5 justify-center p-10 relative">
                <div className="w-8 h-8 bg-gray-50 absolute rotate-45 -left-4"></div>
                <h2 className="text-2xl font-bold text-primary">Business Consulting</h2>
                <p className="text-gray-600 text-lg">As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.</p>
                <div className="flex gap-1.5 items-center text-lg">
                    <button className="hover:underline">Learn More</button> <FaArrowRightLong />
                </div>
            </div>
        </div>
        <div className="flex even:flex-row-reverse bg-gray-50 rounded-md overflow-hidden">
            <div className="w-1/2 bg-[url('/8.jpg')] bg-no-repeat bg-cover bg-center h-[450px]">
                
            </div>
            <div className="w-1/2 flex flex-col gap-5 justify-center p-10 relative">
                <div className="w-8 h-8 bg-gray-50 absolute rotate-45 -left-4"></div>
                <h2 className="text-2xl font-bold text-primary">Business Consulting</h2>
                <p className="text-gray-600 text-lg">As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.</p>
                <div className="flex gap-1.5 items-center text-lg">
                    <button className="hover:underline">Learn More</button> <FaArrowRightLong />
                </div>
            </div>
        </div>
        <div className="flex even:flex-row-reverse bg-gray-50 rounded-md overflow-hidden">
            <div className="w-1/2 bg-[url('/6.jpg')] bg-no-repeat bg-cover bg-center h-[450px]">
                
            </div>
            <div className="w-1/2 flex flex-col gap-5 justify-center p-10 relative">
                <div className="w-8 h-8 bg-gray-50 absolute rotate-45 -left-4"></div>
                <h2 className="text-2xl font-bold text-primary">Business Consulting</h2>
                <p className="text-gray-600 text-lg">As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.</p>
                <div className="flex gap-1.5 items-center text-lg">
                    <button className="hover:underline">Learn More</button> <FaArrowRightLong />
                </div>
            </div>
        </div>
        <div className="flex even:flex-row-reverse bg-gray-50 rounded-md overflow-hidden">
            <div className="w-1/2 bg-[url('/6.jpg')] bg-no-repeat bg-cover bg-center h-[450px]">
                
            </div>
            <div className="w-1/2 flex flex-col gap-5 justify-center p-10 relative">
                <div className="w-8 h-8 bg-gray-50 absolute rotate-45 -left-4"></div>
                <h2 className="text-2xl font-bold text-primary">Business Consulting</h2>
                <p className="text-gray-600 text-lg">As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.</p>
                <div className="flex gap-1.5 items-center text-lg">
                    <button className="hover:underline">Learn More</button> <FaArrowRightLong />
                </div>
            </div>
        </div>
       
      </div>
      <div className="grid grid-cols-3 gap-8 mt-10">
        <div className="px-5 py-6 bg-slate-50 rounded-md shadow-md">
            <div className="flex gap-4 items-center text-2xl text-primary font-bold mb-4">
                <FaRegCreditCard />
                <span>Special financing</span>
            </div>
            <div className="text-gray-600 text-lg">
            Apply for special financial support and earn exclusive rewards.
            </div>
        </div>
        <div className="px-5 py-6 bg-slate-50 rounded-md shadow-md">
            <div className="flex gap-4 items-center text-2xl text-primary font-bold mb-4">
                <FaRegCreditCard />
                <span>Chat with team</span>
            </div>
            <div className="text-gray-600 text-lg">
            Have a question? Chat online with an expert. <span className="text-primary font-bold cursor-pointer">Start chatting</span>
            </div>
        </div>
        <div className="px-5 py-6 bg-slate-50 rounded-md shadow-md">
            <div className="flex gap-4 items-center text-2xl text-primary font-bold mb-4">
                <FaRegCreditCard />
                <span>Call a specialist</span>
            </div>
            <div className="text-gray-600 text-lg">
            Our 24/7 support team is ready for you at 1-800-MY-Elixir.</div>
        </div>
        
      </div>
    </div>
  )
}

export default ServiceSection
