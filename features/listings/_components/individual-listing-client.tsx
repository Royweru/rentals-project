import { Agent, Amenity, Listing, Type } from '@prisma/client'
import React from 'react'
import { IndividualListingGallery } from './inidividual-listing-gallery'
import { IndividualListingDetails } from './individual-listing-details'

export const InidividualListingClient = ({
    listing
}:{
    listing:(Listing
        &{
            amenities:Amenity[],
             agent:Agent,
             type:Type
        }
    )}) => {
  return (
    <div className=' relative lg:p-20 md:p-16 p-8'>
            <div className=' bg-bg-secondary shadow-md w-full  min-h-fit
             rounded-md md:grid-cols-2 grid-cols-1 grid p-4 gap-3'>
                <div className=' w-full relative flex items-center justify-center'>
                <IndividualListingGallery  imageSrc={listing.thumbnail}/>
                </div>
                 <IndividualListingDetails listing={listing}/>
            </div>
       </div>
  )
}
