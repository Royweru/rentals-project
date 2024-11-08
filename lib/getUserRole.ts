import { auth } from "@/auth";
import React from "react";
import { getUserById } from "./getUser";
import { UserRole } from "@/features/auth/types";

export const getUserRole = async () => {
  const session = await auth();

  if (!session) return null;

  if (session) {
    const user = await getUserById(session.user.id as string);
    if (user) return user?.role;
  }
  return null;
};
