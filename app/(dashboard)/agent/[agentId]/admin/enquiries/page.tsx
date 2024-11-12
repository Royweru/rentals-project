import { getAgentListings } from '@/actions/getAgentListings'
import { Button } from '@/components/ui/button'
import { EnquiryBox } from '@/features/enquiries/components/enquiry-box'

import { getAgentId } from '@/lib/getAgentId'
import React from 'react'


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
    <div className=' w-full h-full flex flex-col space-y-4'>
   <div className=' text-center w-full '>
     <h2 className=' text-xl font-bold text-text-darkblue'>
    List of Enquiries
     </h2>
   </div>
   <div className=' w-full relative flex flex-col space-y-3'>
   {agentData?.listings.map((listing)=>(listing.enquiries.map((enquiry)=>(
        <div className=' font-semibold text-xl text-text-black'
        key={enquiry.id}
        >
           <EnquiryBox  data={enquiry}/>
        </div>
    ))))}
   </div>
    </div>
  )
}

export default EnquiriesPage