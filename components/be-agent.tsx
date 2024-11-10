import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export const BeAgent = () => {
  return (
    <div className=" w-full lg:py-8 py-6 lg:px-20 md:px-16 px-10 bg-text-blackgrey">
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-3 ">
        <div className=" relative col-span-1 h-[400px] w-full">
          <Image
            fill
            src={"/feature.png"}
            alt=""
            className=" bg-cover bg-center"
          />
        </div>
        <div className=" w-full flex flex-col items-center justify-center relative col-span-1 h-full">
          <div className=" flex-col flex gap-y-4 ">
            <h3 className=" text-4xl font-semibold text-white">
              Become an agent
            </h3>
            <p className=" text-neutral-100/90 font-normal text-md">
              Become an agent today and have the power to add listings and be a
              tenant in this great platform
            </p>
            <div className=" w-full flex items-center justify-center">
              <a href="/agent/new" target="_blank" rel="noopener noreferrer">
                <Button size={"lg"} variant={"link"} className=" text-white">Become agent</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
