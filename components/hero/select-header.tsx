import { Category, Location, Type } from '@prisma/client'
import React from 'react'


interface CustomHeaderProps{

    dataType:"location"|"type"|"category"
}
export const SelectHeader = ({
  
    dataType
}:CustomHeaderProps) => {

  return (
        <h4 className=' font-normal font-nunito text-sm'>
          {
            dataType==="location"?"Location":dataType==="category"?"Category":"Type"
          }
        </h4>

   
  )
}
