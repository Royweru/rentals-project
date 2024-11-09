import { ListingCard } from '@/features/listings/_components/listing-card'
import { Agent, Amenity, Listing, Type } from '@prisma/client'
import React from 'react'

export const FeaturedListingsGrid = ({
    listings
}:{
    listings:(Listing
        &{
            amenities:Amenity[],
             agent:Agent,
             type:Type
        }
    )[]
}) => {
  return (
    <div className=' grid relative w-full lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-1 md:gap-2 gap-3'>
        {listings.slice(0,4).map((property)=>(
            <ListingCard
              data={property}
              />
        ))}
    </div>
  )
}
