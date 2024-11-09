"use client"
import React, { useEffect, useState } from 'react'
import { SearchBox } from './search-box'
import { Category, Type,Location, Listing } from '@prisma/client'

interface HeroProps{
  types:Type[]|null,
  categories:Category[]|null;
  locations:(
    Location
  )[]|null
}
export const Hero = ({types,categories,locations}:HeroProps) => {

 
  const [isMounted,setIsMounted] = useState(false)

  useEffect(()=>{
   setIsMounted(true)
  },[])
  if(!isMounted) return null

  return (
    <div className=' w-full min-h-[40s0px] lg:min-h-[450px] bg-[url("/hero.jpg")] bg-center bg-cover'>
       <div className= ' h-[350px] lg:h-[450px] relative w-full flex flex-col gap-y-2 justify-center items-center'>
           <div className=' flex flex-col items-center space-y-1 justify-center w-full relative text-center'>
              <p className=' lg:font-semibold font-medium lg:text-base text-sm text-neutral-50/95'>
              feels good to be at home
              </p>
               <h3 className=' md:text-4xl font-semibold lg:font-bold leading-snug text-white/85 text-xl'>
               Find your perfect home
               </h3>
           </div>
           <SearchBox 
            types={types}
            locations={locations}
            categories={categories}
           />
       </div>
        </div>
  )
}
