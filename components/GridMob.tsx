

import { Button } from "@/components/ui/button"

export function GridMob() {
  return (
    <div className=" mx-2 mb-3">

    
    <div className="md:hidden  flex flex-col items-center gap-y-3">

    
    <div style={{background:"linear-gradient(154deg, #ff7861 -38.54%, #d613ee 99.56%)"}} className=" w-full max-w-md  p-6 rounded-2xl border  text-white">
      <h2 className="text-2xl font-bold mb-4">Improve collaboration</h2>
      <p className="mb-6">
        <b>Get your teams working together more closely</b>, even if they're far apart. Centralize project-related 
        communications in one place, brainstorm ideas with Whiteboards, and draft plans together with 
        collaborative Docs.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
          Comments
        </Button>
        <Button variant="secondary" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
          Docs
        </Button>
        <Button variant="secondary" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
          Whiteboards
        </Button>
        <Button variant="secondary" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
          Clips
        </Button>
      </div>
    </div>
     <div style={{ background: 'linear-gradient(152deg, #eb00ff 6.96%, #5037e7 107.25%)' }}  className="w-full max-w-md mx-auto p-6 rounded-3xl b text-white">
     <h2 className="text-2xl font-bold mb-4">Enhance Visibility</h2>
     <p className="mb-6">
     <b>Ditch the needless meetings and repetitive updates.</b> With a single source of truth for all ongoing projects across your entire org, you get a crystal-clear view of what's happening (or not), and who's responsible.

     </p>
     <div className="flex flex-wrap gap-2">
       <Button variant="secondary" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
         Comments
       </Button>
       <Button variant="secondary" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
         Docs
       </Button>
       <Button variant="secondary" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
         Whiteboards
       </Button>
       <Button variant="secondary" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
         Clips
       </Button>
     </div>
   </div>
    <div style={{background:"linear-gradient(154deg, #6731ec -38.54%, #50d2ff 99.56%)"}} className="w-full max-w-md mx-auto p-6 rounded-3xl  text-white">
    <h2 className="text-2xl font-bold mb-4">Automate Work</h2>
    <p className="mb-6">
    <b>Streamline business processes without breaking a sweat.</b> Whether it's onboarding employees, handling IT requests, or managing expense reimbursements, you can automate it all with powerful no-code Automations.
   
    </p>
    <div className="flex flex-wrap gap-2">
      <Button variant="secondary" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
        Comments
      </Button>
      <Button variant="secondary" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
        Docs
      </Button>
      <Button variant="secondary" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
        Whiteboards
      </Button>
      <Button variant="secondary" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
        Clips
      </Button>
    </div>
  </div>
  </div>
  </div>
  )
}