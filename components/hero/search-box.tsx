"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CustomSelect } from "./custom-select";
import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";
import { useMedia, useToggle } from "react-use";

export const SearchBox = () => {
  const isMedium = useMedia("(min-width: 500px)");
  const isMobile = useMedia("(max-width: 499px)");
  const [on, toggle] = useToggle(false);
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  if (isMedium) {
    return (
      <div
        className=" relative  rounded-lg bg-white gap-x-1 flex items-end justify-center px-4 py-3 md:px-6 w-[500px] md:w-[650px]
          md:mx-auto lg:w-[750px]"
      >
        <CustomSelect
          value={location}
          setValue={setLocation}
          dataType="location"
        />
        <CustomSelect
          value={category}
          setValue={setCategory}
          dataType="category"
        />
        <CustomSelect value={type} setValue={setType} dataType="type" />
        <Button className=" font-bold text-white h-full ">
          <FaSearch
            className=" size-4 font-bold
         text-text-blackgrey mr-2 "
          />
          Search
        </Button>
      </div>
    );
  }
  if (isMobile) {
    return (
      <div className=" relative p-1.5 bg-white shadow-sm rounded-xl gap-y-1.5 flex flex-col justify-center items-center">
        <Button 
        variant={"ghost"}
         onClick={toggle}
         className=" font-semibold text-blue-france"
         >
          Advanced search
        </Button>
        {on && (
          <>
            <CustomSelect
              value={location}
              setValue={setLocation}
              dataType="location"
            />
            <CustomSelect
              value={category}
              setValue={setCategory}
              dataType="category"
            />
            <CustomSelect value={type} setValue={setType} dataType="type" />
            <Button className=" font-bold text-white h-full ">
              <FaSearch
                className=" size-4 font-bold
         text-text-blackgrey mr-2 "
              />
              Search
            </Button>
          </>
        )}
      </div>
    );
  }
};
