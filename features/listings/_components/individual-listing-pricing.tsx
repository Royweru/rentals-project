import React from 'react'

export const IndividualListingPricing = ({
    rentalPrice,purchasePrice
}:{
    rentalPrice?:number|null,
    purchasePrice?:number|null
}) => {
  return (
    <div className=' w-full px-3'>
        <div className=' flex items-center justify-center gap-x-2'>
          <span className=' text-md font-semibold text-blue-france'>
            {rentalPrice ?"Rental Price":"Purchase price"}
          </span>
          <span className=' text-xs'> 
             Kes
          </span>
          <p className=' font-bold font-nunito text-lg'>
            {
                rentalPrice?rentalPrice?.toLocaleString('en'):purchasePrice?.toLocaleString('en')
            }
          </p>
            </div> 
    </div>
  )
}
