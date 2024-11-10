import { getCategories } from "@/actions/getCategories";
import { getListings } from "@/actions/getListings";
import { getLocations } from "@/actions/getLocations";
import { getLocationsWithListings } from "@/actions/getLocationsWithListings";
import { getTypes } from "@/actions/getTypes";
import { BeAgent } from "@/components/be-agent";
import { Cities } from "@/components/cities";
import { FeaturedListings } from "@/components/featured-listings";
import { Hero } from "@/components/hero";

export default async function Home() {

  const types = await getTypes()
  const categories = await getCategories()
 const locationsWithListings = await getLocationsWithListings()
 const listings = await getListings()

  return (
 <>
  <Hero
   types={types}
   categories={categories}
   locations={locationsWithListings}
  />
  <Cities locations={locationsWithListings} />
  <BeAgent />
  <FeaturedListings listings={listings} />
 </>
  );
}
