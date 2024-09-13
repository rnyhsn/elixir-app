import { RiErrorWarningFill } from "react-icons/ri";


const Warning = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28">
        <div className="bg-gray-200 py-20">
            <RiErrorWarningFill className="text-5xl text-gray-500 mx-auto" />
            <h1 className="text-gray-700 text-3xl text-center mb-5">Sorry! Something went wrong.</h1>
            <p className="text-center text-gray-500 text-sm">This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
        </div>
    </div>
  )
}

export default Warning
