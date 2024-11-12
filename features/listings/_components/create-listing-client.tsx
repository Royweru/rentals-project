"use client";
import React, { useState } from "react";
import * as z from "zod";
import { Category, Listing, Location, Type } from "@prisma/client";
import { useForm } from "react-hook-form";
import { CreateListingSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCreateListing } from "../api/use-create-listing";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListingHeader } from "./listing-header";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/image-upload";
import { useRouter } from "next/navigation";
import { getAgentId } from "@/lib/getAgentId";
interface CreateListingClientProps {
  categories: Category[] | null;
  types: Type[] | null;
  locations: Location[] | null;
  initialValues?: CustomListing;
}
export const CreateListingClient = ({
  initialValues,
  categories,
  types,
  locations,
}: CreateListingClientProps) => {
  const router = useRouter()
  const agentId = getAgentId()
  const { mutate, isPending } = useCreateListing();
  const form = useForm<z.infer<typeof CreateListingSchema>>({
    resolver: zodResolver(CreateListingSchema),
    defaultValues: initialValues || {
      title: "",
      description: "",
      amenities: [],
      area: 0,
      purchasePrice: 0,
      rentalPrice: 0,
      bathrooms: 0,
      typeId: "",
      categoryId: "",
      locationId: "",
    },
  });

  const onSubmit = (vals: z.infer<typeof CreateListingSchema>) => {
    mutate({
      json: vals,
    },{
      onSuccess(){
        form.reset()
        router.push(`/agent/${agentId}/admin`)
        //Add functonality to redirect to agent dashboard
      }
    });
  };
  return (
    <div className=" relative w-full min-h-screen gap-y-4 flex flex-col">
      <ListingHeader title="Create new Listing" />
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(onSubmit)}
          className=" space-y-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className=" text-lg font-semibold text-blue-capri">
                Name and description of your property
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormField
                  name="title"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          placeholder="Enter listing name e.g 1 bedroom near Thiks road"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="description"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          disabled={isPending}
                          placeholder="Enter listing description or details e.g 1 bedroom near Thiks road"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
          <Card className=" shadow-sm  border-stone-400 bg-neutral-200/85 border-2 border-dotted">
            <CardHeader>
              <CardTitle className=" text-lg font-bold text-text-blackgrey">
                Nitty details and attributes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className=" w-full grid relative grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <FormField
                  control={form.control}
                  name="categoryId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category Id:</FormLabel>
                      <Select
                        disabled={isPending}
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="col-span-1">
                            <SelectValue
                              defaultValue={field.value}
                              placeholder="Select a category"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories?.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="locationId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location Id:</FormLabel>
                      <Select
                        disabled={isPending}
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="col-span-1">
                            <SelectValue
                              defaultValue={field.value}
                              placeholder="Select a location"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {locations?.map((location) => (
                            <SelectItem key={location.id} value={location.id}>
                              {location.county}, {location.city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="typeId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property type Id:</FormLabel>
                      <Select
                        disabled={isPending}
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="col-span-1">
                            <SelectValue
                              defaultValue={field.value}
                              placeholder="Select a property type"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {types?.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="amenities"
                  control={form.control}
                  render={({ field }) => {
                    const [amenitiesInput, setAmenitiesInput] = useState(
                      field.value
                        ? field.value.map((amenity) => amenity.label).join(", ")
                        : ""
                    );

                    return (
                      <FormItem>
                        <FormLabel>Amenities</FormLabel>
                        <FormControl>
                          <Textarea
                            disabled={isPending}
                            placeholder="Enter listing amenities, separated by commas"
                            value={amenitiesInput}
                            onChange={(e) => setAmenitiesInput(e.target.value)} // Update local state only
                            onBlur={() => {
                              const amenitiesArray = amenitiesInput
                                .split(",")
                                .map((item) => item.trim())
                                .filter(Boolean)
                                .map((label) => ({ label }));

                              field.onChange(amenitiesArray); // Update form field only on blur
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  name="area"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Size in squareKm :</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type="number"
                          placeholder=" e.g 2500"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="bathrooms"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of bathrooms</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type="number"
                          placeholder="e.g 3"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
          <Card className=" shadow-sm bg-bg-secondary ">
            <CardHeader>
              <CardTitle className=" font-semibold text-text-darkblue">
                Upload Image
              </CardTitle>
              <CardDescription>Upload an image of your listing</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                name="thumbnail"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ImageUpload
                        onChange={(val) => field.onChange(val)}
                        onRemove={(val) => {
                          field.onChange(val !== field.value);
                        }}
                        value={field.value || ""}
                        disabled={isPending}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className=" text-lg font-semibold text-blue-capri">
                Pricing section
              </CardTitle>
              <CardDescription className=" text-sm text-md font-normal text-text-darkblue ">
                On this section depending on the category of your property you
                can only input one price, if you are renting rental price or if
                you are selling purchasePrice only one.If you input two we will
                disqualify your property
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
                <FormField
                  name="purchasePrice"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Purchase price</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type="number"
                          placeholder="Enter the purchse price for your house if its on sale e.g 2390000"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="rentalPrice"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rental price</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type="number"
                          placeholder="Enter the rental price for your property if its on rent every month e.g 34000"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
          <div className=" w-full flex px-2 items-center justify-end">
            <Button
              className=" font-semibold text-white"
              variant={"secondary"}
              size={"lg"}
              type="submit"
              disabled={isPending}
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
