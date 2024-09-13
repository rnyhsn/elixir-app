import Image from "next/image"

const offerItems = [
    {
        title: "Creative Support",
        description: "We transform brands, grow businesses, and tell brand and product stories in a most creative way",
        icon: "sharing.png"
    },
    {
        title: "Creating Experiences",
        description: "We cover a large range of creative platforms and digital projects with one purpose: to create experiences.",
        icon: "mail.png"
    },
    {
        title: "Product Consulting",
        description: "We guide you through the pipelines that generate new products with higher potential and lower risk.",
        icon: "target.png"
    },
    {
        title: "Business Boosting",
        description: "We provide energy-efficient and environmentally conservative solutions to our clients to boost their business.",
        icon: "world-globe.png"
    },
    {
        title: "Strategic Approach",
        description: "Based on solid strategic framework and real, relevant research, we create prototypes, not presentations.",
        icon: "money.png"
    },
    {
        title: "Logistic Consulting",
        description: "We work buy side and sell side to give our clienrts hard hitting answers and focus hard on best opportunitie",
        icon: "data-analytics.png"
    },
]

const OfferSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28">
        <h1 className="text-4xl font-bold text-center text-primary mb-5">Things You Get</h1>
        <hr className="w-20 h-1 bg-primary mx-auto" />
        <div className="grid grid-cols-3 gap-8 mt-16 gap-y-16">
        {
        offerItems.map((item, index) => (
            <div key={index} className="">
                <Image src={`/${item.icon}`} alt="" width={40} height={40} className="mx-auto mb-5" />
                <h2 className="text-primary text-[22px] font-bold text-center"> {item.title} </h2>
                <p className="text-center text-gray-600"> {item.description} </p>
            </div>
        ))
        }
        </div>
    </div>
  )
}

export default OfferSection
