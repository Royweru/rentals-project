import { Button } from "@/components/ui/button";
import { IconArrowBack } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export const ListingHeader = ({
    title
}:{
    title:string
}) => {
  return (
    <div className=" w-full  flex items-center gap-x-2 md:gap-x-0 justify-center md:justify-between mt-3">
      <Button
        className=" font-bold text-text-black flex items-center justify-center"
        variant={"outline"}
        size={"lg"}
      >
        <Link href={"/"}>
          <IconArrowBack className=" size-4 font-bold" />
          Home page
        </Link>
      </Button>

      <h4 className=" lg:text-4xl md:text-3xl font-nunito
       text-xl  font-semibold  text-text-blackgrey">
         {title}
      </h4>
    </div>
  );
};
