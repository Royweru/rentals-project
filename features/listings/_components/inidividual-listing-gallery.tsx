import Image from 'next/image'
import React from 'react'

export const IndividualListingGallery = ({
    imageSrc
}:{
    imageSrc:string
}) => {
  return (
      
         <div className=' w-full h-[420px] relative rounded-xl'>
            <Image
             src={imageSrc}
             alt=''
             fill
             className=' bg-center bg-cover rounded-lg'
             />
         </div>
     
  )
}
