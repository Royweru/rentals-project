'use server'

import { getAgentbyId } from "@/lib/getAgent";
import { getAgentId } from "@/lib/getAgentId";
import { db } from "@/lib/prismadb";

export const getAgentListings = async (id:string) => {
    try {
        const agent =await getAgentbyId(id)
        if(!agent) return null 
        const agentListings  = agent.properties
              const inquiries = agentListings.reduce((accumulator,currentValue)=>
                 accumulator + currentValue.enquiries.length
                ,0)
              
    return {
        listings:agentListings,
        totalEnquiries:inquiries
    }
    } catch (error) {
        return null
    }
}