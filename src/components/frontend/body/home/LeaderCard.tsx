import Image from 'next/image'
import React from 'react'

const LeaderCard = ({item}: {item: {name: string, title: string, description: string, img: string}}) => {
  return (
    <div>
        <div className="h-[240px] w-full relative rounded-t-xl overflow-hidden">
            <Image src={item.img} alt="" className="object-cover" fill />
        </div>
        <div className="flex flex-col gap-2 p-4">
            <h1 className="text-2xl font-bold text-center text-primary"> {item.name} </h1>
            <p className="text-sm text-gray-400 text-center"> {item.title} </p>
            <p className="text-center text-gray-600 mt-2"> {item.description} </p>
        </div>
    </div>
  )
}

export default LeaderCard
