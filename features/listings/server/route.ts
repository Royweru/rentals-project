import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { CreateListingSchema } from "../schemas";
import { serverUser } from "@/lib/serveruser";
import { db } from "@/lib/prismadb";
import { getAgent } from "@/lib/getAgent";
import { z } from "zod";

const app = new Hono()
.delete('/:listingId',
  async(c)=>{
    const {listingId} = c.req.param()

    const user = await serverUser();

    if (!user) return c.json({ error: "Unauthorized" }, 401);
    const author = await getAgent(user.id)
    if(!author){
       return c.json({errror:"You are not an agent!"},400)
    }
    
    const res = await db.listing.delete({
      where:{
        id:listingId
      }
    })

    return c.json({data:{id:res.id}},200)
  }
)
.get("/",
  zValidator("query",z.object({
    categoryId:z.string().optional(),
     typeId:z.string().optional(),
     locationId:z.string().optional()
  })),
  async(c)=>{
    const {categoryId,typeId,locationId} = c.req.valid("query")
    const res = await db.listing.findMany({
      where:{
       locationId,
       categoryId,
       typeId
      },
      include:{
        agent:true, 
        amenities:true,
        type:true
      }
    })
  return c.json({data:res},200)
  }
)
.post(
  "/",
  zValidator("json", CreateListingSchema),
  async (c) => {
    const user = await serverUser();

    if (!user) return c.json({ error: "Unauthorized" }, 401);

     const author = await getAgent(user.id)
     if(!author){
        return c.json({errror:"You are not an agent!"},400)
     }

    const {
      thumbnail,
      title,
      description,
      rentalPrice,
      purchasePrice,
      categoryId,
      typeId,
      locationId,
      bathrooms,
      amenities,
      area,
    } = c.req.valid("json");

    const res = await db.listing.create({
        data:{
            thumbnail,
            title,
            description,
            rentalPrice,
            purchasePrice,
            categoryId,
            typeId,
            locationId,
            bathrooms,
            amenities:{
                createMany:{
                    data:[...amenities.map((amenity:{label:string})=>amenity)]
                }
            },
            area,
            agentId:author.id
        }
    })
   return c.json({data:res},200)
  }
);;

export default app
