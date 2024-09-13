import React from 'react'
import { IconType } from 'react-icons'

const WelcomeCard = ({item}: {item: {title: string, description: string, icon: any}}) => {
  return (
    <div className="py-8 px-4 bg-white shadow-lg">
        <div className="h-24 w-24 border border-gray-300 text-primary flex items-center justify-center rounded-full mx-auto mb-5">
            {item.icon}
        </div>
        <h1 className="text-primary text-2xl font-semibold text-center"> {item.title} </h1>
        <p className="text-center text-gray-600 mt-2"> {item.description} </p>
    </div>
  )
}

export default WelcomeCard
