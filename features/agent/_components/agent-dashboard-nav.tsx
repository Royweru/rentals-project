"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getAgentId } from "@/lib/getAgentId";
import { IconArrowBack } from "@tabler/icons-react";
import React from "react";

export const AgentDashboardNav = ({
  agencyName,
  agentId,
  agentAvatar,
}: {
  agencyName: string;
  agentId: string | null|undefined;
  agentAvatar: string | null|undefined;
}) => {
  return (
    <div className=" w-full border-b-2 py-2 border-zinc-700/85 flex justify-between items-center">
      <div className="  flex items-center justify-center gap-x-2 ">
        <Avatar>
          <AvatarImage src={agentAvatar||""} alt="" />
        </Avatar>
        <h4 className=" text-4xl font-bold font-nunito text-blue-capri">
          {agencyName}
        </h4>
      </div>
      <a href={`/agent/${agentId}/admin`}>
        <Button
          variant={"outline"}
          className=" text-text-blackgrey font-semibold flex
         items-center justify-center gap-x-3"
          size={"lg"}
        >
          <IconArrowBack className=" size-5 font-semibold" />
          Back to dashboard
        </Button>
      </a>
    </div>
  );
};
