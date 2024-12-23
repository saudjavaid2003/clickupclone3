"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Search, ChevronDown, Plus, MessageSquare, Clock, Zap, Target, FileText, Bell, Settings, Users, Calendar } from 'lucide-react'
import workui from "@/app/assets/images/workui.png"

export default function Component() {
  const [activeTab, setActiveTab] = useState('Chat')

  const navItems = [
    { icon: <Clock className="w-12 sm:w-8 h-8 z-10 bg-white relative" />, label: 'Dashboards' }, // {{ edit_1 }}
{ icon: <Zap className="w-12 sm:w-8 h-8 z-10 border bg-white relative" />, label: 'Sprints' }, // {{ edit_2 }}
{ icon: <MessageSquare className="w-12 sm:w-8 h-8 z-10 border bg-white relative" />, label: 'Whiteboards' }, // {{ edit_3 }}
{ icon: <Target className="w-12 sm:w-8 h-8 z-10 border bg-white relative" />, label: 'Projects' }, // {{ edit_4 }}
{ icon: <MessageSquare className="w-14 sm:w-9 h-9 bg-black z-50 text-white relative" />, label: 'Chat', isNew: true }, // {{ edit_5 }}
{ icon: <FileText className="w-12 sm:w-8 h-8 z-10 bg-white hidden sm:block relative" />, label: 'Forms' }, // {{ edit_6 }}
{ icon: <Zap className="w-8 h-8 z-10 bg-white hidden sm:block relative" />, label: 'Automations' }, // {{ edit_7 }}
{ icon: <Target className="w-8 h-8 z-10 bg-white hidden sm:block relative" />, label: 'Goals' }, // {{ edit_8 }}
{ icon: <MessageSquare className="w-10 sm:w-8 h-8 z-10 bg-white hidden sm:block relative" />, label: 'AI' }, // {{ edit_9 }}
{ icon: <Clock className="h-8 z-10 bg-white hidden sm:block relative" />, label: 'Time' }, // {{ edit_10 }}
  ]

  return (
    <div id='Enterprise' className=" max-w-[100vw] w-fit flex flex-col  p-4 sm:p-8 md:p-8 overflow-hidden">
     
      <nav className=" bg-opacity-80 backdrop-blur-sm mx-auto rounded-t-xl z-10  ">
        <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex overflow-x-auto gap-2 hide-scrollbar">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className={`inline-flex items-center px-1 hover:scale-105 transition-all ease-in 1s pt-1 border-b-2 text-sm font-medium whitespace-nowrap ${
                    activeTab === item.label
                      ? 'border-black text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(item.label)}
                >
                  {item.icon}
                  <span className="ml-2 hidden sm:inline">{item.label}</span>
                  {item.isNew && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      NEW
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      

      <main className="mt-10 rounded-b-xl   ">
        <div className='flex justify-center   '>

   <Image src={workui} alt="workui" className=" lg:w-[50%]  rounded-lg shadow-md " />
        </div>

        {/* <div className='h-[32rem]  gr5 rounded-xl   z-10'>
         

     </div>
<Image src={workui} alt="workui" className=" lg:w-[50%]  z-50 relative bottom-[32rem] left-6   rounded-xl shadow-md " /> */}
      </main>
    </div>
  )
}