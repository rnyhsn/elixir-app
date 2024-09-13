import LeaderCard from "./LeaderCard"

const leaders = [
    {
        name: "Reenal Scott",
        title: "Advertising Consultant",
        description: "Reenal Scott is the Founder and CEO of Elixir, which he started from his dorm room in 2013 with 3 people only.",
        img: "/portrait-1.jpg"
    },
    {
        name: "Lily Anderson",
        title: "Activation Consultant",
        description: "Lily leads Elixir UK and oversees the company’s Customer Operations teams supporting millions ofr users.",
        img: "/portrait-7.jpg"
    },
    {
        name: "Thomas Anderson",
        title: "Change Management Consultant",
        description: "As the VP of People, Thomas’s focus lies in the development and optimization of talent retention",
        img: "/portrait-3.jpg"
    },
    {
        name: "Legartha Mantana",
        title: "Brand Management Consultant",
        description: "As General Counsel of Elixir, Tony oversees global legal activities and policies across all aspects.",
        img: "/portrait-4.jpg"
    },
    {
        name: "John Snow",
        title: "Business Analyst",
        description: "John has overseen the meteoric growth while protecting scaling its uniquely creative and culture.",
        img: "/portrait-5.jpg"
    },
    {
        name: "Ragner Lothbrok",
        title: "Business Consultant",
        description: "Ragner, SVP of Engineering, oversees Elixir’s vast engineering organization which drives the core programming.",
        img: "/portrait-6.jpg"
    },
]

const LeaderShipSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28">
        <h1 className="text-4xl font-bold text-primary text-center">Global Leadership</h1>
        <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-14 mt-20">
        {
            leaders.map((item, index) => (
                <LeaderCard item={item} key={index} />
            ))
        }
        </div>
    </div>
  )
}

export default LeaderShipSection
