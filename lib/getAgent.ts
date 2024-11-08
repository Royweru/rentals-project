import { db } from "./prismadb"
export const getAgent = async(userId:string)=>{
   const agent = await db.agent.findUnique({
    where:{
        userId
    }
   })
   if(agent) return agent
    return null
}