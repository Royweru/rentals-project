import { Button } from "@/components/ui/button";
import { IconArrowBack } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export const AgentHeader = () => {
  return (
    <div className=" w-full  flex items-center justify-between mt-3">
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

      <h4 className=" text-xl font-semibold font-nunito text-text-blackgrey">
           Become an agent
      </h4>
    </div>
  );
};
