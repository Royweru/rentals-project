"use client"
import { SignInCard } from '@/features/auth/_components/sign-in-card'
import { SignUpCard } from '@/features/auth/_components/sign-up-card'
import { AuthTypes } from '@/features/auth/types'
import { useState } from 'react'
const AuthPage = () => {
  const [state,setState] = useState<AuthTypes>("signIn")
  return (
    <>
    {state ==="signIn"? <SignInCard setState={setState}/>:<SignUpCard  setState={setState}/>}
   </>
  )
}

export default AuthPage