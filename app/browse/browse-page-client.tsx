"use client"
import { ListingCard } from '@/features/listings/_components/listing-card'
import { useGetListings } from '@/features/listings/api/use-get-listings'
import React from 'react'


interface BrowsePageClientProps{
    typeId?:string,
    categoryId?:string,
    locationId?:string
}
export const BrowsePageClient = ({
    typeId,
    categoryId,
    locationId
}:BrowsePageClientProps) => {    
    const{data} = useGetListings({typeId,categoryId,locationId}) 

    if(!data|| data.length===0){
        return(
            <div className=' w-full h-full justify-center items-center'>
                 <div className=' flex flex-col items-center gap-y-4'>
                     <h3 className=' lg:text-5xl text-3xl font-bold text-blue-light'>
                         Oopsy! could not find listing
                     </h3>
                     <p className=' font-normal text-md font-nunito text-text-blackgrey'>
                    Try and reset the filters or go back to the home page  to search for other listings
                     </p>
                 </div>
            </div>
        )
    }
    return(
        <div className=' w-full grid relative lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 md:gap-3 lg:gap-2'>
            {data.map((listing)=>(
                <ListingCard 
                 data={listing}
                />
            ))}
        </div>
    )
}
