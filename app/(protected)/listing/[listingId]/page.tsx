import { getCategories } from '@/actions/getCategories'
import { getLocations } from '@/actions/getLocations'
import { getTypes } from '@/actions/getTypes'
import { Button } from '@/components/ui/button'
import { UserRole } from '@/features/auth/types'
import { CreateListingClient } from '@/features/listings/_components/create-listing-client'
import { getAgent } from '@/lib/getAgent'
import { getUserRole } from '@/lib/getUserRole'
import { serverUser } from '@/lib/serveruser'
import { TriangleAlertIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ListingIdPage =async ({
    params
}:{
    params:{listingId:string}
}) => {
  const categories = await getCategories()
  const types = await getTypes()
  const locations = await getLocations()
  const userRole = await getUserRole()

  if(userRole!==UserRole.AGENT){
    return(
      <div className=' w-full h-full relative flex-col gap-y-3flex justify-center items-center'>
         <TriangleAlertIcon className=' animate-spin size-12 text-accent-desructive font-bold' />
           <h2>
             Unfortunately you are not an agent
           </h2>
           <Button
             className='font-semibold text-text-blackgrey'
             variant={"link"}
             size={"lg"}
            >
             <Link href={'/agent/new'}>
              Become agent and manage your own property
             </Link>
           </Button>
      </div>
    )
  }

  return (
    <div className=' w-full h-full relative p-12 md:p-18 lg:p-20'>
    <CreateListingClient types={types} locations={locations} categories={categories} />
  </div>
  )
}

export default ListingIdPage