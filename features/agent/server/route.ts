import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { CreateAgentSchema } from "../schemas";
import {db} from "@/lib/prismadb"
import { serverUser } from "@/lib/serveruser";
import { getAgent } from "@/lib/getAgent";
import { toast } from "sonner";

const app = new Hono()
.post("/",
    zValidator("json",CreateAgentSchema),
   async(c)=>{
    const {agentName,imageUrl,licenseId,expectedListings} = c.req.valid("json")
    const user  = await serverUser()
    if(!user) return c.json({error:"Unauthorized"},401)

    const agentExist = await getAgent(user.id)
    if(agentExist) return c.json({error:"An agent with the same user id already exists"},400)

    await db.user.update({
        where:{
            id:user.id
        },
        data:{
           role:"AGENT" 
        }
    })
    const res  = await db.agent.create({
        data:{
            userId:user.id,
            agentName,
            imageUrl,
            licenseId,
            expectedListings
        }
    })
   

   
    return c.json({data:res},200)
    }
)


export default app