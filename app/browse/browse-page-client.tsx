"use client";
import { ListingCard } from "@/features/listings/_components/listing-card";
import { useGetListings } from "@/features/listings/api/use-get-listings";
import { Loader } from "lucide-react";
import React from "react";

interface BrowsePageClientProps {
  typeId?: string;
  categoryId?: string;
  locationId?: string;
}
export const BrowsePageClient = ({
  typeId,
  categoryId,
  locationId,
}: BrowsePageClientProps) => {
  const { data, isPending } = useGetListings({
    typeId,
    categoryId,
    locationId,
  });

  if (!data && !isPending) {
    return (
      <div className=" w-full h-full justify-center items-center">
        <div className=" flex flex-col items-center gap-y-4">
          <h3 className=" lg:text-5xl text-3xl font-bold text-blue-capri">
            Oopsy! could not find listing
          </h3>
          <p className=" font-normal text-md font-nunito text-text-blackgrey">
            Try and reset the filters or go back to the home page to search for
            other listings
          </p>
        </div>
      </div>
    );
  }
  if (isPending) {
    return (
      <div className=" min-h-screen w-full flex justify-center items-center  bg-bg-secondary">
        <Loader className=" size-20 text-text-darkblue font-bold animate-spin" />
      </div>
    );
  }
  return (
    <div className=" w-full grid relative lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 md:gap-3 lg:gap-2">
      {data?.map((listing) => (
        <ListingCard data={listing} />
      ))}
    </div>
  );
};
