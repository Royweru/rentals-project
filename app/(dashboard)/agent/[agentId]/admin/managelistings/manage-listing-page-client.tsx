import { AgentAdminListingCard } from '@/features/agent/_components/agent-admin-listing-card'
import { Listing } from '@prisma/client'
import React from 'react'

export const ManageListingsPageClient = ({data}:{
    data:{listings:Listing[],
        totalEnquiries:number
    }|null
}) => {
  return (
    <div className=" w-full grid relative lg:grid-cols-3 sm:grid-cols-2  gap-4 md:gap-3 lg:gap-2">
      {data?.listings.map((listing) => (
        <AgentAdminListingCard data={listing} />
      ))}
    </div>
  )
}
