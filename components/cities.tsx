import React from 'react'
import { CitiesGrid } from './cities-grid'
import { SectionHeader } from './section-header';

export const Cities = () => {
    const data = [
        { title: "Beautiful Apartment", description: "Spacious and well-lit apartment with modern amenities.", imageUrl: "/house1.jpg" },
        { title: "Luxury Villa", description: "Elegant villa with a private pool and garden.", imageUrl: "/house2.jpg" },
        { title: "Cozy Cottage", description: "A warm, cozy cottage perfect for a peaceful retreat.", imageUrl: "/house3.jpg" },
        { title: "Modern Loft", description: "Stylish loft in the heart of the city.", imageUrl: "/house3.jpg" },
        { title: "Beachfront Condo", description: "Condo with stunning ocean views.", imageUrl: "/house4.jpeg" },
        { title: "Mountain Cabin", description: "Rustic cabin surrounded by nature.", imageUrl: "/house5.jpeg" }
      ];
  return (
    <div className=' w-full px-1.5 md:px-6 lg:px-10 py-6 md:py-8 lg:py-10 space-y-2' >
        <SectionHeader title={"Top lisitings in top cities"} sub={"Discover some of the best properties in the following cites"} />
      <CitiesGrid data={data}/>
    </div>
  )
}
