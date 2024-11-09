import { IconMeterSquare } from '@tabler/icons-react'
import { BathIcon, BedIcon } from 'lucide-react'
import React from 'react'

export const PropertiesIcons = ({
   bedrooms,bathrooms,size
}:{
  bedrooms:number,
  bathrooms:number,
  size:number

}) => {
  return (
    <div className=' px-1 flex justify-between items-center '>
         <div className=' w-full flex flex-col items-center justify-center gap-y-0.5 font-nunito font-bold text-sm'>
           <BedIcon className=' text-text-black font-bold size-3'/>
           <div className=' font-light text-xs w-full flex items-center justify-center gap-x-1'>
           {bedrooms}
            <span className=' text-xs '>
                Bedrooms
            </span>
           
           </div>
           
         </div>
         <div className=' w-full flex flex-col items-center justify-center gap-y-0.5 font-nunito font-bold text-sm'>
           <BathIcon className=' text-text-black font-bold size-3'/>
           
           <div className=' font-light text-xs w-full flex items-center justify-center gap-x-1'>
           {bathrooms}
           <span className=' text-xs'>
                Bathrooms
            </span>
          
           </div>
         </div>
         <div className=' w-full flex flex-col items-center justify-center gap-y-0.5 font-nunito font-bold text-sm'>
           <IconMeterSquare className=' text-text-black font-bold size-3'/>
           <div className=' font-light text-xs w-full flex items-center justify-center gap-x-1'>
           {size.toLocaleString()}
           <span className=' text-xs'>
                ft
            </span>
          
           </div>
         </div>
    </div>
  )
}
