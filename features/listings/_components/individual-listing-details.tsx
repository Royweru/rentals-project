"use client"
import { Agent, Amenity, Listing, Type, User } from '@prisma/client'
import React from 'react'
import { IndividualListingHeader } from './individual-listing-header'
import { IndividualListingProperties } from './inidividual-listing-properties'
import { IndividualListingAmenities } from './inidividual-listing-amenities'
import { IndividualListingPricing } from './individual-listing-pricing'
import { Button } from '@/components/ui/button'
import { useCreateEnquiry } from '@/features/enquiries/api/use-create-enquiry'

interface IndividualListingDetailsProps{
    listing:(Listing
        &{
            amenities:Amenity[],
             agent:Agent,
             type:Type
        }
      
    ),
}
export const IndividualListingDetails = ({listing}:IndividualListingDetailsProps) => {
   const {mutate,isPending} =useCreateEnquiry()
   const onSubmit = ()=>{
    mutate({
      json:{listingId:listing.id}
    })
   }
  return (
    <div  className=' w-full relative h-full lg:py-8 md:py-6 py-0'>
        <div className=' flex flex-col space-y-4'>
          <IndividualListingHeader title={listing.title} description={listing?.description}/>
          <IndividualListingProperties 
            bathrooms={listing.bathrooms}
            bedrooms={listing.type.bedrooms}
            area={listing.area}
          />
          
          <IndividualListingAmenities 
            amenities={listing.amenities}
          />
          <IndividualListingPricing
            rentalPrice={listing.rentalPrice}
            purchasePrice={listing.purchasePrice}
          />
          <div className=' w-full flex items-center justify-center'>
          <Button 
           size={"lg"}
           className=' text-white font-bold'
           onClick={onSubmit}
           disabled={isPending}
          >
              Make enquiry
          </Button>
          </div>
         
        </div>
    </div>
  )
}
