import { z } from "zod";

export const CreateListingSchema = z.object({
    locationId:z.string().min(1,"Required"),
    categoryId:z.string().min(1,"Required"),
    typeId:z.string().min(1,"Required"),
  
})