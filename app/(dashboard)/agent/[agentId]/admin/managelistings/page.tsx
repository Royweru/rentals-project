import React from 'react'
import { ManageListingsPageClient } from './manage-listing-page-client'
import { getAgentListings } from '@/actions/getAgentListings'
import { AgentDashboardNav } from '@/features/agent/_components/agent-dashboard-nav'
import { getAgent, getAgentbyId } from '@/lib/getAgent'

const ManageListingsPage =async ({params}:{
    params:{agentId:string}
}) => {
    const data= await getAgentListings(params.agentId)
    const agent = await getAgentbyId(params.agentId)
  return (
    <main className=' h-full w-full space-y-4'>
        <AgentDashboardNav  agencyName={agent?.agentName||"Agent"} agentAvatar={agent?.imageUrl} agentId={agent?.id}/>
     <div className=' relative h-full w-full space-y-4 flex flex-col lg:p-20 md:p-14 sm:p-10 p-8'>
        <ManageListingsPageClient  data ={data}/>
        </div>
    </main>
  )
}

export default ManageListingsPage