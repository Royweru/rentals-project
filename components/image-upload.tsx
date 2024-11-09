"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface ImageUploadProps {
  disabled: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string;
}
export const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };
  return (
    <div className=" flex w-full items-center justify-start pl-2 gap-x-3">
      {value && (
        <div
          className=" relative  size-28 rounded-md  bg-cover bg-center"
          style={{ background: `url(${value})` }}
        />
      )}

      <CldUploadWidget onSuccess={onUpload} uploadPreset="rentals">
        {({ open }) => {
          const onClick = () => {
            open();
          };
          return (
            <Button
              type="button"
              disabled={disabled}
              variant="secondary"
              onClick={onClick}
            >
              <ImagePlus className=" h-4 w-4 mr-2" />
              upload an image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};
