import { Enquiry, Listing, User } from '@prisma/client'
import React from 'react'

export const EnquiryBox = ({
    data
}:{
    data:Enquiry&{
        user:User,
        listing:Listing
    }
}) => {
  return (
    <div className=' w-full px-4  bg-bg-primary shadow-sm rounded-lg border border-text-blackgrey py-3'>
          <div className=' w-full relative flex items-center justify-between'>
          <div className=' flex-1 flex flex-col items-center justify-center'>
             <h5 className=' text-lg font-semibold text-blue-capri'>
               Name
             </h5>
             <p className=' text-sm font-bold text-text-darkblue'>
               {data.user.name}
             </p>
          </div>
          <div className=' flex-1 flex flex-col items-center justify-center'>
             <h5 className=' text-lg font-semibold text-blue-capri'>
              Email
             </h5>
             <p className=' text-sm font-bold text-text-darkblue'>
               {data.user.email}
             </p>
          </div>
      
          <div className=' flex-1 flex flex-col items-center justify-center'>
             <h5 className=' text-lg font-semibold text-blue-capri'>
             Property
             </h5>
             <p className=' text-sm font-bold text-text-darkblue'>
               {data.listing.title}
             </p>
          </div>
          </div>
    </div>
  )
}
