import React from 'react'

const ListingLayout = ({children}:{
    children:React.ReactNode
}) => {
  return (
    <div className=' min-h-screen w-full'>
        {children}
    </div>
  )
}

export default ListingLayout