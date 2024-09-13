import LatestNewsCard from "./LatestNewsCard"

const newsItems = [
    {
        title: "Tax impacts of lease mean accounting change",
        name: "Paul O'Sullivan",
        description: "HMRC released a consultation document to flag some potential tax impacts that a forthcoming change..",
        img: "/9.jpg"
    },
    {
        title: "What brexit means for data protection law",
        name: "Enrico Ambrosi",
        description: "Assuming that the referendum is not ignored completely, there are two possible futures for the UK...",
        img: "/10.jpg"
    },
    {
        title: "The growing meanace of social engineering fraud",
        name: "Robson",
        description: "Social engineering involves the collection of information from various sources about a target...",
        img: "/11.jpg"
    },
]

const LatestNewSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28">
        <h1 className="text-center text-primary text-5xl font-bold">Latest News</h1>
        <hr className="h-1 bg-primary w-20 mt-5 mx-auto" />
        <div className="grid grid-cols-3 gap-8">
        {
            newsItems.map((item, index)=> (
                <LatestNewsCard item={item} key={index} />
            ))
        }
        </div>
    </div>
  )
}

export default LatestNewSection
