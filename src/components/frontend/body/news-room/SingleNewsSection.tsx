import Image from 'next/image'
import React from 'react'

const SingleNewsSection = () => {
  return (
    <div className="bg-white shadow-md">
      <h2 className="text-gray-500 text-lg tracking-wide">Thomas Been,  May 15, 2017</h2>
      <h1 className="text-3xl font-bold text-primary mb-10">Tax impacts of lease accounting change</h1>
      <div className="relative w-full h-[400px] rounded-t-xl">
        <Image src="/news-1.jpg" alt="" className="object-cover" fill />
      </div>
      <div className="text-lg text-gray-700 first-letter:text-3xl p-10">
      On 9 August 2016, HMRC released a consultation document to flag some potential tax impacts that a forthcoming change in lease accounting may have on the funding of plant and machinery. From 2019, lessees using IFRS (including FRS 101), as opposed to FRS 102 (UK GAAP), will no longer have to distinguish between finance and operating leases. All leases (except some small value leases or very short leases) will be capitalized on the lessee’s balance sheet at the NPV of the future payments from the day the lease starts. This accounting change will not affect lessors. At the moment, the tax treatment typically depends on whether a lease is a ‘long funding lease’ or not. If it is, then it is the lessee who gets capital allowances (CAs). However, much anti-avoidance legislation is focused on the concept of finance leases and the IFRS change will interfere with that. In its consultation, HMRC has floated four options for addressing the issue. The first is broadly the status quo, with some tinkering. The others contain the more radical suggestion to move towards an accounts-based regime for taxing leases, using a system of debits and credits somewhat akin to the loan relationship regime and which would similarly eliminate the capital/revenue divide. ith such a proposal, including:
      </div>
    </div>
  )
}

export default SingleNewsSection
