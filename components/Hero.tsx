// 'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <div className=" flex items-center justify-center ">
      <div className="text-center px-4 py-16 max-w-3xl mx-auto ">
        <h1 className="text-4xl sm:text-5xl md:text-[64px]  font-semibold  text-[#1e1b4b] mb-6">
          The everything app for work
        </h1>
        <p className="text-lg sm:text-xl md:text-[22px] text-gray-700 mb-8">
          <span className="font-bold">Now with Chat, powered by AI.</span> One place for teams
          <br className="hidden sm:inline" /> of all sizes to communicate and get work done.
        </p>
        <Link
          href="#"
          
          className="inline-block  lg:px-24 py-4 text-[11px] px-11 lg:text-2xl font-semibold text-white rounded-xl from-blue-500 bghero hover:to-purple-700 transition-all duration-200 shadow-lg   hover:shadow-xl"
          
        >
          Get Started, It&apos;s FREE →
        </Link>
        <p className="mt-6 text-sm text-gray-500">
          Free Forever. No Credit Card.
        </p>
      </div>
    </div>
  )
}