import Image from 'next/image'
import React from 'react'

const BrandSection = () => {
  return (
    <div className="bg-slate-100 py-20 px-4 md:px-10 lg:px-20 xl:px-28">
        <div className="grid grid-cols-6 gap-14">
            <div className="relative h-[80px]">
                <Image src="/logo2.png" alt="" className="" fill />
            </div>
            <div className="relative h-[80px]">
                <Image src="/logo1.png" alt="" className="" fill />
            </div>
            <div className="relative h-[80px]">
                <Image src="/logo3.png" alt="" className="" fill />
            </div>
            <div className="relative h-[80px]">
                <Image src="/logo4.png" alt="" className="" fill />
            </div>
            <div className="relative h-[80px]">
                <Image src="/logo5.png" alt="" className="" fill />
            </div>
            <div className="relative h-[80px]">
                <Image src="/logo6.png" alt="" className="" fill />
            </div>
        </div>
    </div>
  )
}

export default BrandSection
