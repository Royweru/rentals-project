import { db } from '@/lib/prismadb'
export const getLocations =async () => {
  try {
    const res = await db.location.findMany({
        include:{
            properties:true
        }
    })
   return res
  } catch (error) {
    return null
  }
}
