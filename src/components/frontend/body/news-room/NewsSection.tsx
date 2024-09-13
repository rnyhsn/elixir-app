import LatestNewsCard from "../home/LatestNewsCard"

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
    {
        title: "Tax impacts of lease mean accounting change",
        name: "Paul O'Sullivan",
        description: "HMRC released a consultation document to flag some potential tax impacts that a forthcoming change..",
        img: "/12.jpg"
    },
    {
        title: "What brexit means for data protection law",
        name: "Enrico Ambrosi",
        description: "Assuming that the referendum is not ignored completely, there are two possible futures for the UK...",
        img: "/13.jpg"
    },
    {
        title: "The growing meanace of social engineering fraud",
        name: "Robson",
        description: "Social engineering involves the collection of information from various sources about a target...",
        img: "/14.jpg"
    },
]


const NewsSection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28 mt-10">
        
        <div className="grid grid-cols-3 gap-x-8 gap-y-12">
        {
            newsItems.map((item, index)=> (
                <LatestNewsCard item={item} key={index} />
            ))
        }
        </div>
    </div>
  )
}

export default NewsSection
