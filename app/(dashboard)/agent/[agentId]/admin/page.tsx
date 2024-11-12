import { getAgentListings } from '@/actions/getAgentListings'
import { Contact2Icon, HouseIcon } from 'lucide-react'
import React from 'react'

const AgentAdminDashboardPage = async({params}:{
  params:{agentId?:string}
}) => {
  const agent = await getAgentListings(params?.agentId||"null")
  return (
    <div className='  w-full h-full relative grid sm:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-4 '>
      <a href={`/agent/${params.agentId}/admin/managelistings`}>
      <div 
      className=' border-neutral-300/90 border-2 gap-y-5
       shadow-sm  bg-white hover:cursor-pointer hover:opacity-95
       flex flex-col items-center justify-center p-4 min-h-min rounded-md col-span-1
      '
       >
          <div className=' w-full flex items-center justify-center'>
           <HouseIcon
             className=' font-black text-blue-france size-28'
             />
          </div>
          <div>
            <p className=' lg:text-2xl font-semibold md:text-xl text-lg text-text-blackgrey '>
                Manage listings
            </p>
          </div>
       </div>
      
      </a>
      <a href={`/agent/${params.agentId}/admin/enquiries`}>
      <div 
      className=' border-neutral-300/90 border-2 gap-y-5
       shadow-sm  bg-white hover:cursor-pointer hover:opacity-95
       flex flex-col items-center justify-center p-4 min-h-min rounded-md col-span-1
      '
       >
          <div className=' w-full flex items-center justify-center'>
           <Contact2Icon
             className=' font-black text-blue-france size-28'
             />
          </div>
          <div className=' flex w-full items-center justify-center gap-x-3'>
            <p className=' lg:text-2xl font-semibold md:text-xl text-lg text-text-blackgrey '>
              Enquiries
            </p>
            <span className=' font-semibold text-xl text-text-black'>
            {agent?.totalEnquiries}
            </span>
          </div>
       </div>
      
      </a>
   
    </div>
  )
}

export default AgentAdminDashboardPage