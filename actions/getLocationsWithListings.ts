import { db } from '@/lib/prismadb';

export const getLocationsWithListings = async () => {
  try {
    const res = await db.location.findMany({
      include: {
        properties: true
      }
    });

    const locationsWithListings = res.filter((location)=>location.properties.length>0)

    return  locationsWithListings
 
  } catch (error) {
    return null;
  }
};
