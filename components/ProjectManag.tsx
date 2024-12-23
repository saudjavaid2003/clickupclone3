"use client"
import { ArrowRight, Check, MessageSquare, Monitor, Code, Pencil, Cog, FileText, BarChart2, PieChart } from 'lucide-react'
import convene from "@/app/assets/images/convene.png"
import { useState } from 'react'; 

export function ProjectManag() {
  const [activeIndex, setActiveIndex] = useState<number>(0); 

  return (
    <section id='Solutions' className="hidden md:block w-fit mx-auto py-12 md:py-24  ">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { name: 'PMO', icon: Monitor },
            { name: 'Marketing', icon: MessageSquare },
            { name: 'Product', icon: Monitor },
            { name: 'Engineering', icon: Code },
            { name: 'Agencies', icon: Pencil }
          ].map((team, index) => (
            <button
              key={team.name}
              onClick={() => setActiveIndex(index)} 
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium rounded-xl transition-colors
                ${activeIndex === index ? 'bg-white text-purple-600 shadow-lg shadow-red-500/50 ring-2 ring-blue-500/50' : 'text-gray-600 hover:bg-white border shadow-md'}`} 
            >
              <team.icon className="w-4 h-4" />
              {team.name}
            </button>
          ))}
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 rounded-xl bg-white border shadow-md transition-colors">
            See all teams
          </button>
        </div>
        <div className="bg-white rounded-xl lg:w-[55vw]  shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:col-span-1 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Deliver projects on time, every time</h2>
              <p className="text-gray-600">
                Get teams running more efficiently with a complete project management solution.
              </p>
              <ul className="space-y-2">
                {[
                  'Reduce delivery time with custom templates',
                  'Track effort to impact with OKR planning',
                  'Manage complex projects at scale'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 pt-4">
                <img
                  src={convene.src}
                  alt="Testimonial"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className='flex items-center'>

                  
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm pl-2 font-medium text-black">convene</p>
                </div>
                <div>

                  <p className="text-xs text-gray-600">
                    <span className='font-semibold'>
                    "ClickUp brings all of our teams together into one place
                    </span>
                     so that they can stay on track, collaborate and communicate."
                  </p>
                  </div>

                </div>
              </div>
            </div>
            <div className="lg:mx-10">
              {[
                { icon: Cog, text: 'Flexible workflows for every team' },
                { icon: FileText, text: 'Tasks, docs, spreadsheets, and more' },
                { icon: BarChart2, text: 'Resource and workload optimization' },
                { icon: PieChart, text: 'Dashboards and insights' },
              ].map((item, index) => (
                <div key={index} className=" border-b flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <item.icon className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-600">{item.text}</span>
                </div>
              ))}
              {/* <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-colors"> */}
              <button className="w-full py-3 px-4 font-semibold bghero mt-4 text-white  rounded-xl transition-colors">

                Use this Solution <ArrowRight className="w-4 h-5 inline-block ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}