import React from 'react'

export const IndividualListingHeader = ({title,description}:{
    title:string,description?:string|null
}) => {
  return (
    <div className=' flex flex-col items-start justify-center gap-y-0.5'>
         <h3 className=' text-4xl font-bold font-nunito text-text-darkblue leading-snug'>
           {title}
         </h3>
         <p className='  text-md text-text-blackgrey font-normal'>
         {description}
         </p>
        </div>
  )
}
