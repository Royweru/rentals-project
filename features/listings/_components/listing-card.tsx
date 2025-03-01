"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Agent, Amenity, Listing, Type } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { PropertiesIcons } from "./properties-icons";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export const ListingCard = ({
  data,
}: {
  data: Listing & {
    amenities: Amenity[];
    agent: Agent;
    type:Type
  };
}) => {
    const router = useRouter()
  return (
    <div className=" col-span-1 overflow-hidden shadow-md hover:cursor-pointer"
    onClick={()=>router.push(`/listing/view/${data.id}`)}
    >
      <div className="  bg-bg-secondary rounded-t-lg flex flex-col gap-y-2">
        <div className=" relative w-full">
          <div className=" w-full h-[350px] relative">
            <Image
              src={data.thumbnail}
              alt=""
              fill
              className=" bg-center bg-cover rounded-t-lg"
            />
            <div className=" absolute right-1 z-10 -bottom-2">
              <Avatar className=" lg:size-12 md:size-10 size-8 shadow-sm">
                <AvatarImage src={data?.agent?.imageUrl} alt="Agentaavatar" />
                <AvatarFallback className=" size-4 bg-gradient-to-tl from-blue-700 via-blue-light to-blue-france">
                  {data.agent.agentName.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className=" relative w-full flex flex-col gap-y-2">
          <div className=" flex px-2 justify-start items-center text-md  font-semibold text-text-darkblue">
            {data.title}
          </div>
          <div>
            <PropertiesIcons
              bedrooms={data.type.bedrooms}
              bathrooms={data.bathrooms}
              size={data.area}
            />
          </div>
          <div className=" px-2">
            <Separator className=" bg-text-black font-bold mb-2" />
          </div>
          <div className=" px-1 pb-2 w-full gap-x-2 flex items-center font-nunito text-sm">
            {data.rentalPrice ? (
              <>
                <Badge className=" text-text-darkblue" variant={"outline"}>{data?.rentalPrice.toLocaleString('en')}</Badge>
                <p> per month</p>
              </>
            ) : (
              <>
                <Badge  className=" text-text-darkblue"  variant={"secondary"}>{data?.purchasePrice?.toLocaleString('en')}</Badge>
                <p>for sale</p>
              </>
            )}
            <Badge
            variant={"destructive"}
            className=" text-white font-semibold"
            >
            Available
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
