"use client"
import { Clock, Flag, Settings } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { LiaToggleOnSolid } from "react-icons/lia";

export function GridCard() {
  return (
    <div className="w-full max-w-md p-6 rounded-3xl gridgr2 hidden lg:block text-white shadow-lg">
      <h2 className="text-2xl font-bold mb-1">Customize in a click</h2>
      <p className="text-sm mb-6 opacity-90">
        Configuring Clockify to different types of work is as easy as flipping a switch.
      </p>
      <div className="space-y-4 mt-14">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6" />
            <span className="font-medium">Time Tracking</span>
          </div>
          <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200" />
        </div>
        <div className="flex items-center justify-between bg-white  w-full  p-4">
          <div className="flex items-center space-x-3 text-blue-300">
            <Flag className="w-6 h-6" />
            <span className="font-medium text-blue-300">Sprints</span>
          </div>
          {/* <div className="text-blue-200 "> */}
          <LiaToggleOnSolid className="w-10 h-10 text-blue-300" />
          {/* </div> */}
          {/* <Switch className="" /> */}
        </div>
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center space-x-3">
            <Settings className="w-6 h-6" />
            <span className="font-medium">Custom Fields</span>
          </div>
          <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200" />
        </div>
      </div>
    </div>
  )
}