import { IconMeterSquare } from "@tabler/icons-react";
import { BathIcon, BedIcon } from "lucide-react";
import React from "react";

interface IndividualListingPropertiesProps {
  area: number;
  bathrooms: number;
  bedrooms: number;
}
export const IndividualListingProperties = ({
  area,
  bathrooms,
  bedrooms,
}: IndividualListingPropertiesProps) => {
  return (
    <div className=" relative px-2 w-full grid grid-cols-2 gap-2">
      <div className=" flex w-full flex-col gap-y-1 items-center col-span-1">
        <BedIcon className=" font-semibold text-text-black size-7" />
        <div className=" relative w-full font-bold text-sm font-nunito flex gap-x-2 justify-center items-center">
          <span>{bedrooms}</span>
          <p>Bedrooms</p>
        </div>
      </div>
      <div className=" flex w-full flex-col items-center gap-y-1 col-span-1">
        <BathIcon className=" font-semibold text-text-black size-7" />
        <div className=" w-full font-bold text-sm font-nunito flex gap-x-2 justify-center items-center">
          <span>{bathrooms}</span>
          <p>Bathrooms</p>
        </div>
      </div>
      <div className=" flex w-full flex-col gap-y-1 items-center col-span-1">
        <IconMeterSquare className=" font-semibold text-text-black size-7" />
        <div className=" w-full font-bold text-sm font-nunito flex gap-x-2  justify-center items-center">
          <span>{area}</span>
          <p>Metre squared</p>
        </div>
      </div>
    </div>
  );
};
