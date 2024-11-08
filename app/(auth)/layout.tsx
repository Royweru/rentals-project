import React from 'react'

const AuthLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
  return (
    <div className=' w-full min-h-screen flex items-center justify-center
      bg-gradient-to-bl from-slate-400 via-slate-900 to-text-blackgrey 
    '>
      
        {children}
    </div>
  )
}

export default AuthLayout