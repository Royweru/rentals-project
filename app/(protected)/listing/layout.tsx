import { serverUser } from '@/lib/serveruser'
import { redirect } from 'next/navigation'

import React from 'react'

const ListingLayout = async({children}:{
    children:React.ReactNode
}) => {
  const user = await serverUser()
  if(!user) redirect("/")
  return (
    <div className=' min-h-screen w-full'>
        {children}
    </div>
  )
}

export default ListingLayout