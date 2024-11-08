"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { CreateAgentSchema } from "@/features/agent/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {  ImageUpload } from "../../../components/image-upload";
import { AgentHeader } from "./agent-header";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCreateAgent } from "../api/use-create-agent";
import { useRouter } from "next/navigation";

export const CreateAgentClient = () => {
  const router = useRouter()
  const {mutate,isPending} = useCreateAgent()
  const form = useForm<z.infer<typeof CreateAgentSchema>>({
    resolver: zodResolver(CreateAgentSchema),
    defaultValues: {
      agentName: "",
      licenseId: "",
      imageUrl: "",
      expectedListings: 0,
    },
  });

  const onSubmit = (vals: z.infer<typeof CreateAgentSchema>) => {
    mutate({
      json:vals
    },{
      onSuccess(){
        form.reset()
        //Redirect to create a new listing
      router.push('/listing/new')
      }
    })
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" flex flex-col gap-y-2">
            <AgentHeader />
            <Card>
              <CardHeader>
                <CardTitle className=" font-semibold text-text-darkblue">
                  Agency name
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FormField
                  name="agentName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          {...field}
                          placeholder="e.g Kwamboka holdings limited"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card className=" shadow-sm ">
              <CardHeader>
                <CardTitle className=" font-semibold text-text-darkblue">
                  Agent Avatar
                </CardTitle>
                <CardDescription>
                  Upload an image avatar to make your appearance unique and
                  market your brand
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  name="imageUrl"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ImageUpload
                          onChange={(val:any) => field.onChange(val)}
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
            <Card className=" shadow-sm bg-neutral-100/95">
              <CardHeader>
                <CardTitle className=" font-semibold text-text-darkblue">
                  Extra details
                </CardTitle>
                <CardDescription>
                  Fill in some more extra details
                </CardDescription>
              </CardHeader>
              <CardContent className="  grid grid-cols-2 gap-1.5">
                <FormField
                  name="licenseId"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-blue-france">
                        License Id
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          className=" col-span-1 font-semibold"
                          placeholder="e.g 94hhfffxd"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="expectedListings"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" font-semibold text-blue-france">
                        Expected number of properties
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isPending}
                          type="number"
                          className=" col-span-1 font-semibold"
                          placeholder=" e.g 3"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <div className=" w-full flex justify-end items-center">
              <Button
                className=" font-semibold text-text-darkblue"
                type="submit"
                size={"lg"}
                disabled={isPending}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};
