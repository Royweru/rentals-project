import { db } from '@/lib/prismadb'
export const getTypes =async () => {
  try {
    const res = await db.type.findMany({
        include:{
            properties:true
        }
    })
   return res
  } catch (error) {
    return null
  }
}
