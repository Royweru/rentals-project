import { Amenity } from '@prisma/client'
import { StarFilledIcon } from '@radix-ui/react-icons'
import React from 'react'

export const IndividualListingAmenities = ({
    amenities
}:{
    amenities:Amenity[]
}) => {
  return (
    <div className=' w-full grid gap-2 grid-cols-2 px-2'>
     {amenities.map((amenity)=>(
        <div className='  w-full flex items-center justify-start bg-gray-400/85 px-4 py-2 rounded-md'>
           <StarFilledIcon className=' size-3 mr-2 text-accent-yellow'/>
           <p className=' font-nunito font-semibold text-sm'>
            {amenity.label}
           </p>
        </div>
     ))}
    </div>
  )
}
