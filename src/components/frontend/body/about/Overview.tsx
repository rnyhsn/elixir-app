import { VscQuote } from "react-icons/vsc";


const Overview = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28">
        <div>
            <h1 className="text-5xl font-bold text-center text-primary mb-5">Company Overview</h1>
            <hr className="h-1 bg-primary w-20 mx-auto" />
        </div>
        <div className="bg-white shadow-md px-8 py-10 mt-20">
            <h2 className="text-2xl font-bold text-primary mb-3">Earning the right</h2>
            <p className="text-gray-600 text-lg">As a first order business consulting firm, we help companies, foundations and individuals make a difference. Our work gets to the heart of the matter. We break silos because it takes more than any one check or policy or letter to tackle big issues like economic security, human rights or climate sustainability. We prescribe a custom formula of advocacy, collaboration, investment, philanthropy, policy and new ways of doing business in order to help you make progress.</p>
            <div className="flex gap-3 ml-20 w-[75%] my-8 relative items-end">
                <VscQuote className="text-7xl text-gray-400 font-bold relative -top-4" /> 
                <p className="text-2xl text-primary tracking-wide">But how do we do it? We like to call it earning the right, walking the talk and playing the game …</p>
            </div>
                <div className="text-lg text-gray-600 columns-2 gap-12 first-letter:text-4xl">
                Elixir serves to help people with creative ideas succeed. Our platform empowers millions of people — from individuals and local artists to entrepreneurs shaping the world’s most iconic businesses — to share their stories and create an impactful, stylish, and easy-to-manage online presence. The Cambridge office is the home of the Risk management practice. We work to assure the safe performance of complex critical systems; develop safety leadership and culture; manage safety and risk in high-hazard industries; understand complex project risks, measure and report risk performance. We work across a wide range of industries and public sector organizations that include upstream and downstream oil and gas; rail and road transportation; construction; and gas utilities and distribution. We work worldwide in Europe, Middle East and Asia, Africa and South America based out of our offices in Cambridge, UK and Milan, Italy.

                </div> 
        </div>
        
    </div>
  )
}

export default Overview
