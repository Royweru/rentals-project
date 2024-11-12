import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { db } from "@/lib/prismadb";
import { serverUser } from "@/lib/serveruser";
const app = new Hono()
.post("/",
    zValidator("json",z.object({listingId:z.string()})),
    async(c)=>{
        const user = await serverUser()

        if(!user) return c.json({error:"Unauthorized"},401)

        const {listingId} = c.req.valid("json")
        if(!listingId) return c.json({error:"Listing id is required"},400)

        const res = await db.enquiry.create({
            data:{
                userId:user.id,
                listingId
            }
        })
        return c.json({data:res},200)
    }
)

export default app