import { Loader } from 'lucide-react'
import React from 'react'

const BrowsePageLoading = () => {
  return (
    <div className=' min-h-screen w-full flex justify-center items-center  bg-bg-secondary'>
          <Loader className=' size-20 text-text-darkblue font-bold animate-spin' />
    </div>
  )
}

export default BrowsePageLoading