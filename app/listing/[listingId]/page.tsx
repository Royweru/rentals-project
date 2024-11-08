import React from 'react'

const ListingIdPage = ({
    params
}:{
    params:{listingId:string}
}) => {
  return (
    <div>
        ListingIdPage
        Listing Id:{params.listingId}
        </div>
  )
}

export default ListingIdPage