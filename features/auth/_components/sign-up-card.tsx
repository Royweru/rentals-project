"use client";
import React, { useState, useTransition } from "react";
import * as z from "zod";

import { AuthTypes } from "../types";
// import { FaGoogle } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { SignupSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Success } from "./Success";
import { Error } from "./Error";
import { Register } from "@/actions/register";
import { useRouter } from "next/navigation";

export const SignUpCard = ({
  setState,
}: {
  setState: (state: AuthTypes) => void;
}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [isErr, setIsErr] = useState<string | undefined>("");
  const [isSuccess, setIsSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword:""
    },
  });

  const onSubmit = (values: z.infer<typeof SignupSchema>) => {
    if(values.confirmPassword !==values.password) return setIsErr("Passwords do not match")
    setIsErr("");
    setIsSuccess("");
    startTransition(() => {
      
      Register(values).then((data) => {
        setIsErr(data?.error);
        setIsSuccess(data?.success);
        form.reset();
        router.refresh();
      });
    });
  };
  return (
    <Card className="  w-full sm:mx-0 mx-1 sm:w-[650px] md:w-[750px] ">
      <CardContent>
        <CardHeader className=" text-center w-full">
          <CardTitle className=" text-text-darkblue font-bold tracking-wide lg:text-2xl text-xl ">
            Hey there , welcome to Apartamenti
          </CardTitle>
          <CardDescription className=" font-nunito font-normal text-text-blackgrey">
            Register and be part of our community
          </CardDescription>
        </CardHeader>
        <div className=" w-full px-4">
          <Form {...form}>
            <form
              action=""
              onSubmit={form.handleSubmit(onSubmit)}
              className=" w-full relative space-y-3"
            >
              <div className="grid grid-cols-2 gap-1 md:gap-2 relative w-full">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John doe"
                        type="text"
                        className=" col-span-1 relative"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Reee@gmail.com"
                        className=" col-span-1 relative"
                        type="email"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="phoneNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your phone number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+254759355344"
                        className=" col-span-1 relative"
                        type="number"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
               
              {/* <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm your password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>
          
              <Success message={isSuccess} />
              <Error message={isErr} />
  
              <div className="items-center flex gap-x-1 justify-center w-full text-sm font-light">
                Already have an account?
                <span
                  className=" hover:underline text-text-blackgrey font-extralight cursor-pointer"
                  onClick={() => setState("signIn")}
                >
                  Sign in
                </span>
              </div>
              <div className=" w-full flex px-4 justify-center items-center">
                <Button
                variant={"secondary"}
                  className=" font-semibold 
                   text-sm font-mono"
                  type="submit"
                  size={"lg"}
                  disabled={isPending}
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};
