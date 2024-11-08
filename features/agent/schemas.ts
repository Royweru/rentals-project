import { z } from "zod";

export const CreateAgentSchema = z.object({
    agentName:z.string().min(3,"Minimum of 3 characters required"),
    imageUrl:z.string().optional(),
    licenseId:z.string().optional(),
    expectedListings:z.coerce.number().min(1,"Required")
})