import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export const Error = ({ message }: { message?: string }) => {
  if (!message) return null;
  return (
    <div
      className="  p-4 bg-destructive/15 text-sm font-semibold font-mono text rounded-md flex items-center
     justify-center gap-x-2 text-destructive"
    >
      <FaExclamationTriangle className=" text-rose-400 size-5 font-bold" />
      <p>{message}</p>
    </div>
  );
};
