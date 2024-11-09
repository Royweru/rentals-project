"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export const Filters = ({
 category,location,type
}:{
    category?:string,
    location?:string,
     type?:string
}) => {
    const router = useRouter()
  return (
    <div className=' w-full flex justify-center items-center gap-x-4'>
        {category &&(
          <Badge variant={"outline"}>
             {category}
          </Badge>
        )}
        
        {location &&(
            <Badge variant={"destructive"}>
            {location}
        </Badge>
        )}
        
        {type &&(
             <Badge variant={"secondary"}>
             {type}
         </Badge>
        )}
      
    </div>
  )
}
