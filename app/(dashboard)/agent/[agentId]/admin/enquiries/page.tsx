import { getAgentListings } from '@/actions/getAgentListings'
import { Button } from '@/components/ui/button'
import { getAgentbyId } from '@/lib/getAgent'
import { getAgentId } from '@/lib/getAgentId'
import React from 'react'
import { string } from 'zod'

const EnquiriesPage =async ({
    params
}:{
    params:{agentId:string}
}) => {
    const agentData = await getAgentListings(params.agentId)
    const agentId = await getAgentId()
    if(agentData?.totalEnquiries===0){
        return (
            <div className=' w-full h-full flex flex-col gap-y-5 items-center justify-center'>
             <h2 className=' text-4xl font-bold text-accent-yellow'>
             Right now it seems like you have no  enquiries
             </h2>
             <a href={`/agent/${agentId.id}/admin`}>
             <Button>
               Head back to dashboard
         </Button>
             </a>
           
            </div>
        )
    }
  return (
    <div className=' w-full h-full flex flex-col gap-y-3'>
    {agentData?.listings.map((listing)=>(listing.enquiries.map((enquiry)=>(
        <div className=' font-semibold text-xl text-text-black'
        key={enquiry.id}
        >
          {enquiry.user.name}
        </div>
    ))))}
    </div>
  )
}

export default EnquiriesPage