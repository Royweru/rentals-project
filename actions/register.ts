"use server";

import { SignupSchema } from "@/schemas";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import * as z from "zod";
import { signIn } from "@/auth";
import bcrypt from "bcryptjs";
import { db } from "@/lib/prismadb";
import { getUserByEmail } from "@/lib/getUser";
export const Register = async (vals: z.infer<typeof SignupSchema>) => {
  const validatedFields = SignupSchema.safeParse(vals);

  if (!validatedFields.success) return { error: "Invalid Fields" };

  const { email, name, password,phoneNumber } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "Email already exists!" };

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      email,
      name,
      hashedPassword,
      phoneNumber:phoneNumber?phoneNumber:0
    },
  });

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid Credentials",
          };
        default:
          return { error: "Something went wrong" };
      }
    }
   
  return { success: `${name} you have been successfully registered` };
}}
