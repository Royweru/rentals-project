import { auth } from '@/auth'
import React from 'react'
import { getAgent } from './getAgent'
import { Agent } from '@prisma/client'

export const getAgentId = async() => {
 try {
    const session  = await auth()
    if(!session?.user.id) return {id:null}
    const agent = await getAgent(session.user.id)
    if(!agent ) return {id:'new'}
   return{id:agent.id}

 } catch (error) {
    return {id:null}
 }
}
