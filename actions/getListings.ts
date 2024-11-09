"use server"
import { db } from "@/lib/prismadb"
export const getListings  =async ()=>{
  try {
      const res = await db.listing.findMany({
        include:{
            agent:true,
            type:true,
            amenities:true
        }
      })

      return res
  } catch (error) {
    return []
  }
}