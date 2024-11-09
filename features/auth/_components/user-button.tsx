"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { User } from "@prisma/client";
import { ContactRound, LogOutIcon } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

export const UserButton = ({
  user,
  isAgent,
}: {
  user: User;
  isAgent: boolean;
}) => {
  const fallbackInitial = user.name?.charAt(0).toUpperCase();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback
            className=" bg-gradient-to-tr from-blue-france
         via-blue-capri rounded-full to-blue-light text-xl text-white font-bold "
          >
            {fallbackInitial}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-slate-50 w-72 p-2">
        <div className="py-4 px-3 flex items-center justify-center ">
          <Avatar className=" size-12">
            <AvatarFallback
              className=" bg-gradient-to-tr from-blue-france
         via-blue-capri rounded-full to-blue-light text-xl text-white font-bold "
            >
              {fallbackInitial}
            </AvatarFallback>
          </Avatar>
        </div>
        <Separator className=" bg-text-darkblue mb-3" />
        <DropdownMenuItem
          className=" hover:bg-transparent"
        >
          <Button
            variant={"outline"}
            className=" flex  text-text-darkblue w-full gap-x-1 items-center justify-center"
            // onClick={()=>router.push("/agent")} push to admin dashboard
          >
            <ContactRound className=" size-4" />
            Agent dashboard
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            variant={"ghost"}
            className=" flex  text-text-darkblue w-full gap-x-1 items-center justify-center"
            onClick={() => signOut()}
          >
            <LogOutIcon className=" size-4" />
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
