import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export const Success = ({ message }: { message?: string }) => {
  if (!message) return null;
  return (
    <div
      className="  bg-emerald-500/15 text-sm font-semibold font-mono text rounded-md flex items-center
     justify-center gap-x-2 text-emerald-700 p-4"
    >
      <FaExclamationTriangle className=" text-emerald-500 size-5 font-bold" />
      <p>{message}</p>
    </div>
  );
};
