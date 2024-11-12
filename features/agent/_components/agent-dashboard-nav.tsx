"use client";
import { Button } from "@/components/ui/button";
import { IconArrowBack } from "@tabler/icons-react";
import React from "react";

export const AgentDashboardNav = ({ agencyName }: { agencyName: string }) => {
  return (
    <div className=" w-full border-b-2 border-zinc-700/85 flex justify-between items-center">
      <div>
        <h4 className=" text-4xl font-bold font-nunito text-blue-capri">
          {agencyName}
        </h4>
      </div>
      <a href="/">
        <Button
          variant={"outline"}
          className=" text-text-blackgrey font-semibold flex
         items-center justify-center gap-x-3"
          size={"lg"}
        >
          <IconArrowBack className=" size-5 font-semibold" />
          Back to home page
        </Button>
      </a>
    </div>
  );
};
