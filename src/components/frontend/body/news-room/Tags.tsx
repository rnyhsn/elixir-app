import React from 'react'

const Tags = () => {
  return (
    <div className="py-10 px-6 bg-white rounded-md shadow-md mt-20">
        <h1 className="text-primary text-center font-bold text-2xl">Tags</h1>
        <div className="flex gap-2 flex-wrap mt-5 text-sm">
            <button className="py-1 px-3 rounded-[4px] border font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"> Advisory </button>
            <button className="py-1 px-3 rounded-[4px] border font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"> Finance </button>
            <button className="py-1 px-3 rounded-[4px] border font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"> Ideas </button>
            <button className="py-1 px-3 rounded-[4px] border font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"> Data </button>
            <button className="py-1 px-3 rounded-[4px] border font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"> Market </button>
            <button className="py-1 px-3 rounded-[4px] border font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"> Tax </button>
            <button className="py-1 px-3 rounded-[4px] border font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"> Consulting </button>
            <button className="py-1 px-3 rounded-[4px] border font-semibold border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"> Accounting </button>
        </div>
    </div>
  )
}

export default Tags
