import Image from 'next/image'
import React from 'react'

const CeoMessage = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28 flex">
        <div className="relative w-1/3 h-[380px] rounded-tl-2xl rounded-bl-2xl overflow-hidden">
            <Image src="/ceo.jpg" alt="" className="object-cover" fill />
        </div>
        <div className="w-2/3 flex flex-col gap-6 p-10 justify-center">
            <h2 className="text-2xl font-bold text-primary">Message From CEO</h2>
            <p className="text-lg tracking-wide text-gray-600">Elixir co-operates with clients in solving the hardest problems they face in their businesses—and the world. We do this by channeling the diversity of our people and their thinking.</p>
            <div>
            <h2 className="text-xl uppercase font-semibold text-primary mb-1">Peter Parker</h2>
            <p className="text-sm text-slate-600"> NY Office </p>
            </div>
        </div>
    </div>
  )
}

export default CeoMessage
