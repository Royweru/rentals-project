import { z } from "zod";

export const CreateListingSchema = z.object({
  locationId: z.string().min(1, "Required"),
  categoryId: z.string().min(1, "Required"),
  typeId: z.string().min(1, "Required"),
  title: z.string().min(1, "Required"),
  description: z.string().optional(),
  amenities: z.object({label:z.string()}).array(),
  rentalPrice: z.coerce.number().optional(),
  purchasePrice: z.coerce.number().optional(),
  thumbnail: z.string().min(3, "Required"),
  bathrooms: z.coerce.number(),
  area: z.coerce.number().min(1, "Required"),
});
