"use client"
import React from 'react'
import { SectionHeader } from './section-header'
import { FeaturedListingsGrid } from './featured-listings-grid'
import { useGetListings } from '@/features/listings/api/use-get-listings'
import { Agent, Amenity, Listing, Type } from '@prisma/client'

export const FeaturedListings = ({
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
    <div className=' w-full px-1.5 md:px-6 lg:px-10 py-6 md:py-8 lg:py-10 space-y-2' >
    <SectionHeader title={"Some featured listings"} sub={"Discover some of the most featured properties"} />
    <FeaturedListingsGrid
      listings ={listings}
    />
</div>
  )
}
