import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ExpertizeCounter from "./ExpertizeCounter";

const counts = [
    {title: "Cases Solved", counter: 52},
    {title: "Trained Experts", counter: 164},
    {title: "Branches", counter: 38},
    {title: "Satisfied Client", counter: 100},
]

const Expertize = () => {
  return (
    <div className="" style={{backgroundImage: "url('/background-15.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className="w-full h-[450px] px-4 md:px-10 lg:px-20 xl:px-28 py-20 flex gap-5" style={{background: "rgba(0,0,0, 0.6)"}}>

        <IoMdCheckmarkCircleOutline className="text-secondary text-7xl" />
        <div>
            <h1 className="text-5xl text-secondary font-bold mb-2">Take the right step,</h1>
            <h1 className="text-5xl text-white font-bold">do the big things.</h1>
            <div className="flex gap-10 mt-24">
            {
                counts.map((item, index) => (
                    <ExpertizeCounter item={item} key={index} />
                ))
            }
            </div>
        </div>

        </div>
    </div>
  )
}

export default Expertize
