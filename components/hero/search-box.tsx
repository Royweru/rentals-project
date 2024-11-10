"use client";
import React, { useState } from "react";
import qs from "query-string";
import { SelectHeader } from "./select-header";
import { Listing, Category, Type, Location } from "@prisma/client";
import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";
import { useMedia, useToggle } from "react-use";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchBoxProps {
  types: Type[] | null;
  categories: Category[] | null;
  locations: Location[] | null;
}

export const SearchBox = ({ types, categories, locations }: SearchBoxProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isMedium = useMedia("(min-width: 500px)");
  const isMobile = useMedia("(max-width: 499px)");
  const [on, toggle] = useToggle(false);
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  const onSearch = () => {
    const updatedQuery = {
      categoryId: category,
      locationId: location,
      typeId: type,
    };
    const pushUrl = qs.stringifyUrl(
      {
        url: "/browse",
        query: updatedQuery,
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    router.push(pushUrl);
  };
  if (isMedium) {
    return (
      <div
        className=" relative  rounded-lg bg-white gap-x-1 flex items-center justify-center px-4 py-3 md:px-6 w-[500px] md:w-[650px]
          md:mx-auto lg:w-[750px]"
      >
      
        <div className=" flex flex-col gap-y-0.5 relative w-full">
          <SelectHeader dataType="type" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className=" bg-transparent border border-b-2 relative w-full py-2 shadow-none focus:ring-0 focus:border-0 "
          >
            <option value={''} selected>
                  Choose category
            </option>
            {categories?.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className=" flex flex-col gap-y-0.5 relative w-full">
          <SelectHeader dataType="location" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className=" bg-transparent border border-b-2 relative w-full py-2 shadow-none focus:ring-0 focus:border-0 "
          >
              <option value={''} selected>
                  Choose City
            </option>
            {locations?.map((city) => (
              <option value={city.id} key={city.id}>
                {city.county}, {city.city}
              </option>
            ))}
          </select>
        </div>
        <div className=" flex flex-col gap-y-0.5 relative w-full">
          <SelectHeader dataType="category" />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className=" bg-transparent border border-b-2 relative w-full py-2 shadow-none focus:ring-0 focus:border-0 "
          >
              <option value={''} selected>
                 Choose popery type
            </option>
            {types?.map((type) => (
              <option value={type.id} key={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <Button className=" font-bold text-white " onClick={onSearch}>
          <FaSearch
            className=" size-4 font-bold
          mr-2 h-full "
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
            <div className=" flex flex-col gap-y-0.5 relative w-full">
              <SelectHeader dataType="location" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className=" bg-transparent border border-b-2 relative w-full py-2 shadow-none focus:ring-0 focus:border-0 "
              >
                {locations?.map((city) => (
                  <option value={city.id} key={city.id}>
                    {city.county}, {city.city}
                  </option>
                ))}
              </select>
            </div>
            <div className=" flex flex-col gap-y-0.5 relative w-full">
              <SelectHeader dataType="type" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className=" bg-transparent border border-b-2 relative w-full py-2 shadow-none focus:ring-0 focus:border-0 "
              >
                {categories?.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className=" flex flex-col gap-y-0.5 relative w-full">
              <SelectHeader dataType="category" />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className=" bg-transparent border border-b-2 relative w-full py-2 shadow-none focus:ring-0 focus:border-0 "
              >
                {types?.map((type) => (
                  <option value={type.id} key={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>

            <Button className=" font-bold text-white ">
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
