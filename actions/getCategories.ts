import { db } from '@/lib/prismadb'
export const getCategories =async () => {
  try {
    const res = await db.category.findMany({
        include:{
            properties:true
        }
    })
   return res
  } catch (error) {
    return null
  }
}
