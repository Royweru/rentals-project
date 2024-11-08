import { Category, Location, Type } from '@prisma/client'
import React from 'react'


interface CustomSelectProps{
    value:string,
    setValue:(val:string)=>void,
    data?:any[]
    dataType:"location"|"type"|"category"
}
export const CustomSelect = ({
    value,
    setValue,
    data,
    dataType
}:CustomSelectProps) => {

  return (
    <div className=' flex flex-col gap-y-0.5 relative w-full'>
        <h4 className=' font-normal font-nunito text-sm'>
          {
            dataType==="location"?"Location":dataType==="category"?"Category":"Type"
          }
        </h4>
   <select 
    value={value}
    onChange={(e)=>setValue(e.target.value)}
    className=' bg-transparent border border-b-2 relative w-full py-2 shadow-none focus:ring-0 focus:border-0 '
    >

      {data?.map((item)=>(
        <option value={item.id} key={item.id}>
           {item.name||item.label|| item.county && item.city}
        </option>
      ))}
      <option value="Ruaka">
        Ruaka
      </option>
      <option value="Nairobi">
        Nairobi
      </option>
      <option value="Kisumu">
        Kisumu
      </option>
    </select>
    </div>
   
  )
}
