
import Link from 'next/link'
import Image from 'next/image'
import applstore from "@/app/assets/images/applestore.svg"
import playstore from "@/app/assets/images/googlestore.svg"
import macbook from "@/app/assets/images/macbook.svg"
import microsoft from "@/app/assets/images/microsoft.svg"
import clickupfooter from "@/app/assets/images/clickupfooter.svg"
import { LuCalendarClock } from "react-icons/lu";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { MdOutlineLock } from "react-icons/md";
import { PiSpeedometerThin } from "react-icons/pi";

export function Footer() {
  return (
    <footer id='ContactSales' className="border overflow-hidden text-gray-600 text-sm ">
      <div className="border-t border-b flex  justify-start pl-3 lg:pl-0 lg:justify-center  border-gray-200"> 
      
        <div className="flex flex-col xl:flex-row space-y-2 xl:space-y-0 justify-between  axifoma space-x-24 items-center py-4 ">
          <div className="flex items-center space-x-2 ">
            <Image src={clickupfooter} alt="clickup" className="w-5 h-5 " />
            <span className='text-sm lg:text-base font-semibold text-[#0c1947]'>The everything app for work.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-[#292D34]">
            <div className="flex items-center justify-center space-x-2">
            <div className="border-l-2 border-[#ceceea] mr-2 h-4"></div>

              <LuCalendarClock />

              <span className=' '>24/7 support</span>
            </div>
            <div className="flex items-center space-x-2">
            <div className="border-l-2 border-[#ceceea] mr-2 h-4"></div>

              <AiTwotoneThunderbolt />

              <span>Weekly updates</span>
            </div>
            <div className="flex items-center space-x-2">
            <div className="border-l-2 border-[#ceceea] mr-2 h-4"></div>

              <MdOutlineLock />
              <span>Secure and compliant</span>
            </div>
            <div className="flex items-center space-x-2">
            <div className="border-l-2 border-[#ceceea] h-4 mr-2"></div>

            <PiSpeedometerThin />
              <span>99.9% uptime</span>
            </div>
          </div>
        </div>
      </div> {/* End of top banner */}
      {/* Main footer content */}
      <div className='border-t border-gray-200 px-3 bg-gray-100  py-8'>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-8 lg:px-[310px] ">
        <div>
          <h3 className="font-black text-[#292D34] mb-4">ClickUp</h3>
          <ul className="space-y-2">
            <li className='hover:bg-white rounded-xl'><Link href="#">Download</Link></li>
            <li className='hover:bg-white'><Link href="#">About Us</Link></li>
            <li className='hover:bg-white'><Link href="#">Careers</Link></li>
            <li className='hover:bg-white'><Link href="#">Customers</Link></li>
            <li className='hover:bg-white'><Link href="#">Community</Link></li>
            <li className='hover:bg-white'><Link href="#">Affiliate & Referrals</Link></li>
            <li className='hover:bg-white'><Link href="#">Reviews</Link></li>
            <li className='hover:bg-white'><Link href="#">Press</Link></li>
            <li className='hover:bg-white'><Link href="#">Brand</Link></li>
            <li className='hover:bg-white'><Link href="#">Product Roadmap</Link></li>
            <li className='hover:bg-white'><Link href="#">Status</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-black text-[#292D34] mb-4">Resources</h3>
          <ul className="space-y-2">
            <li className='hover:bg-white'><Link href="#">Help Docs</Link></li>
            <li className='hover:bg-white'><Link href="#">On-Demand Demo</Link></li>
            <li className='hover:bg-white'><Link href="#">ClickUp University</Link></li>
            <li className='hover:bg-white'><Link href="#">Webinars</Link></li>
            <li className='hover:bg-white'><Link href="#">Events</Link></li>
            <li className='hover:bg-white'><Link href="#">Templates</Link></li>
            <li className='hover:bg-white'><Link href="#">Import</Link></li>
            <li className='hover:bg-white'><Link href="#">API</Link></li>
            <li className='hover:bg-white'><Link href="#">Consultants</Link></li>
            <li className='hover:bg-white'><Link href="#">Partners</Link></li>
            <li className='hover:bg-white'><Link href="#">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-black text-[#292D34] mb-4">Features</h3>
          <ul className="space-y-2">
            <li className='hover:bg-white'><Link href="#">Gantt Chart</Link></li>
            <li><Link href="#">Dashboards</Link></li>
            <li><Link href="#">Native Time Tracking</Link></li>
            <li className='hover:bg-white'><Link href="#">Mind Maps</Link></li>
            <li className='hover:bg-white'><Link href="#">Automations</Link></li>
            <li className='hover:bg-white'><Link href="#">Notepad</Link></li>
            <li className='hover:bg-white'><Link href="#">Integrations</Link></li>
            <li className='hover:bg-white'><Link href="#">Email</Link></li>
            <li className='hover:bg-white'><Link href="#">To-Do List</Link></li>
            <li className='hover:bg-white'><Link href="#">Kanban Board</Link></li>
            <li className='hover:bg-white'><Link href="#">Sprints</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-black text-[#292D34] mb-4">Compare</h3>
          <ul className="space-y-2">
            <li className='hover:bg-white'><Link href="#">vs Monday</Link></li>
            <li className='hover:bg-white'><Link href="#">vs Asana</Link></li>
            <li className='hover:bg-white'><Link href="#">vs Jira</Link></li>
            <li className='hover:bg-white'><Link href="#">vs Trello</Link></li>
            <li className='hover:bg-white'><Link href="#">vs Airtable</Link></li>
            <li className='hover:bg-white'><Link href="#">vs Notion</Link></li>
            <li className='hover:bg-white'><Link href="#">vs Basecamp</Link></li>
            <li className='hover:bg-white'><Link href="#">vs Wrike</Link></li>
            <li className='hover:bg-white'><Link href="#">vs MS Project</Link></li>
            <li className='hover:bg-white'><Link href="#">vs Todoist</Link></li>
            <li className='hover:bg-white'><Link href="#">vs Smartsheet</Link></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-semibold mb-4">Learn</h3>
          <ul className="space-y-2">
            <li className=' hover:bg-white'><Link href="#">Blog</Link></li>
            <li className=' hover:bg-white'><Link href="#">Software Team Hub</Link></li>
            <li className=' hover:bg-white'><Link href="#">Agency Hub</Link></li>
          </ul>
          <h3 className="font-black text-[#292D34] mt-8 mb-4">Connect</h3>
          <div className="flex space-x-2">
            <Link href="#" className="bg-black text-white p-2 rounded-[6px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link href="#" className="bg-black text-white p-2 rounded-[6px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
              </svg>
            </Link>
            <Link href="#" className="bg-black text-white p-2 rounded-[6px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
            <Link href="#" className="bg-black text-white p-2 rounded-[6px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-wrap justify-evenly  items-center py-8 border-t border-gray-200">

        {/* <div className="flex flex-wrap  space-x-2 px-36 "> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  space-x-2 px-36 ">

          <Link href="#" className="w-[50vw] md:w-full">
    <Image src={applstore} alt="applestore" className="  object-cover" />
                 
            
            
          </Link>
          <Link href="#" className="w-[50vw] md:w-full   ">
    <Image src={playstore} alt="playstore" className=" object-cover" />
            
          </Link>
          <Link href="#" className="hidden sm:block">
    <Image src={macbook} alt="macbook" className="  object-cover" />
            
          </Link>
          <Link href="#" className="hidden sm:block">
    <Image src={microsoft} alt="microsoft" className="  object-cover" />
            
          </Link>
        </div>
        <div className="mt-4 lg:mt-0 space-x-4">
          <span>© 2024 ClickUp</span>
          <Link href="#">Security</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
        </div>
      </div>
    </div>
    {/* </div> */}
  </footer>
  )
}