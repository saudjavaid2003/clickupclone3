// 'use client'
import marketing from "@/app/assets/images/marketing.png"
// import marketing from "../app/assets/images/marketing.png"
import Image from "next/image";
import { ArrowRight, Divide } from 'lucide-react'
import clickupbrain from "@/app/assets/images/clicckupbrain.svg"
import marketingmob from "@/app/assets/images/marketingmob.webp"


export function Marketing() {
  return (
    <div  className="mx-2 md:mx-0 ">

    
    <div className="w-full overflow-hidden   max-w-4xl mx-auto border rounded-xl herofont border-r-pink-400 border-t-pink-500 border-opacity-50  "
    
    
    >
      <div 
        className="relative overflow-hidden   rounded-3xl p-8 shadow-lg "
       
      >
        <Image src={marketing} alt="marketing" className="hidden md:block absolute object-contain   inset-0 bg-opacity-30" />
        <div className="  grid grid-cols-1 md:grid-cols-2 gap-8  ">
          <div className=" space-y-6 ">
            <div className="space-y-2">
              <Image src={clickupbrain} alt="logo" className="  bg-opacity-30" />
              <h2 className="text-4xl font-bold">
                <span className="text-pink-500 font-extrabold">One AI</span> for
                <br />
                all your work
              </h2>
              <p className="text-sm">Add to any paid plan for $7/user/mo</p>
            </div>
            <p className=" ">
              <span className="font-semibold">

              Instantly power up company-wide AI
              </span>
              <br />
              <span className="">

              that connects every aspect of your
              </span>
              <br />
              work, across all your apps.
            </p>
            <div className="flex space-x-4">
              <button className="inline-flex items-center font-extrabold justify-center rounded-xl bg-pink-100 px-4 py-2 text-sm  text-pink-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2">
                Try for free
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center rounded-full bg-[#f1f1f9] px-4 py-2 text-sm font-extrabold text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2">  
                Learn more
              </button>
            </div>
          </div>
         
        </div>

        <Image src={marketingmob} alt="marketing" className=" mt-4 md:hidden   inset-0 bg-opacity-30" />
      </div>
    </div>
    </div>
  )
}

function FeatureCard({ title, question }: { title: string; question: string }) {
  return (
    <div className="bg-white bg-opacity-80 rounded-lg p-3 shadow-sm">
      <h4 className="text-lg font-semibold text-pink-600 mb-2">{title}</h4>
      <p className="text-xs text-gray-600">{question}</p>
    </div>
  )
}