import React from 'react'

const BeAgentLayout = ({
    children
}:{
    children:React.ReactNode
}
) => {
  return (
    <div className=' w-full min-h-screen flex '>
        <div className="w-1/2 min-h-screen lg:block hidden">
        <video
          src="/beagent.mp4" // Replace with your video path
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
      </div>
      
        {children}
        </div>
  )
}

export default BeAgentLayout