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
import { Login } from "@/actions/login";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Error } from "./Error";
import { Success } from "./Success";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const SignInCard = ({
  setState,
}: {
  setState: (state: AuthTypes) => void;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isErr, setIsErr] = useState("");
  // const [isSuccess, setIsSuccess] = useState<string | undefined | null>("");
  
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setIsErr("");
    
    try {
      startTransition(async () => {
        // Show loading state while logging in
        const data = await Login(values);
        
        if (data?.error) {
          setIsErr(data.error);
          return;
        }

        // Success handling
        form.reset();
        router.refresh();
        
        // Optional: Redirect to dashboard or home page
        router.push("/dashboard");
        
        // Optional: Show success toast/notification
        toast.success("Successfully logged in!");
      });
    } catch (error) {
      // Handle unexpected errors
      setIsErr("An unexpected error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };
  return (
    <Card className="   w-full sm:mx-0 mx-3 sm:w-[350px] md:w-[500px] ">
      <CardContent>
      <CardHeader className=" text-center w-full">
          <CardTitle className=" text-text-darkblue font-bold tracking-wide lg:text-2xl text-xl ">
            Welcome back, we missed you
          </CardTitle>
          <CardDescription className=" font-nunito font-normal text-text-blackgrey">
            sign in
          </CardDescription>
        </CardHeader>
        <div className=" w-full px-4">
          <Form {...form}>
            <form
              action=""
              onSubmit={form.handleSubmit(onSubmit)}
              className=" space-y-2 w-full"
            >
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Reee@gmail.com"
                        type="text"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
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
              <Success />
              <Error message={isErr} />
              {/* <div className=" w-full">
                <Button
                  className=" w-full flex gap-x-2 text-sm font-semibold text-brand-black "
                  variant="ghost"
                  size="lg"
                >
                  <FaGoogle className=" size-5 text-blue-400" />
                  <span>Continue with google</span>
                </Button>
              </div> */}
              <div className="items-center flex gap-x-1 justify-center w-full text-sm font-light">
                Don&apos;t have an account?
                <span
                  className=" hover:underline text-blue-capri font-extralight cursor-pointer"
                  onClick={() => setState("signUp")}
                >
                  Sign Up
                </span>
              </div>
              <div className=" w-full flex  justify-center items-center">
                <Button
                  className=" font-semibold text-black font-mono"
                  variant={"secondary"}
                  size={"lg"}
                  type="submit"
                  disabled={isPending}
                >
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};
