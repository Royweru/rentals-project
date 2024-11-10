import { getListings } from '@/actions/getListings'
import { InidividualListingClient } from '@/features/listings/_components/individual-listing-client'
import React from 'react'

const InidividualListing = async({params}:{
  params:{listingId:string}
}) => {
  const listings = await getListings()
  const listing = listings.find((listing)=>listing.id ===params.listingId)
  
  if(!listing) {
     return (
      <div className=' font-bold text-4xl flex h-full items-center justify-center'>
          <h3 className=' text-text-darkblue'>
                 Looks like there is no listing found
          </h3>
      </div>
     )
  }
  return (
    <div className=' w-full h-full'>
       <InidividualListingClient
       listing={listing} />
    </div>
  )
}

export default InidividualListing