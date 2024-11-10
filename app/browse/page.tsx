import React from 'react'
import { BrowsePageClient } from './browse-page-client'
import { Filters } from './filters'
import { getCategories } from '@/actions/getCategories'
import { getLocations } from '@/actions/getLocations'
import { getTypes } from '@/actions/getTypes'

interface BrowsePageProps{
  searchParams:{
    categoryId?:string,
    typeId?:string,
    locationId?:string
  }
}
const BrowsePage = async({searchParams}:BrowsePageProps) => {
  const categories = await getCategories()
  const locations = await getLocations()
  const types  = await getTypes()

  const category = categories?.find((category)=>category.id===searchParams.categoryId)
  const location = locations?.find((location)=>location.id===searchParams.locationId)
  const type = types?.find((type)=>type.id===searchParams.typeId)
  return (
    <main className=' h-full w-full'>
     <div className=' relative h-full w-full space-y-4 flex flex-col lg:p-20 md:p-14 sm:p-10 p-8'>
        <Filters 
         type={type?.name}
         category={category?.name}
         location={location?.city}
        />
        <BrowsePageClient 
         typeId={searchParams.typeId}
         categoryId={searchParams.categoryId}
         locationId={searchParams.locationId}
        />
     </div>
    </main>
  )
}

export default BrowsePage