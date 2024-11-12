import { useQueryClient, useMutation } from "@tanstack/react-query";
import { InferRequestType,InferResponseType } from "hono";

import {client} from '@/lib/rpc'
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<typeof client.api.listings["$post"],200>
type RequestType = InferRequestType<typeof client.api.listings["$post"]>

export const useCreateListing = ()=>{
    const router = useRouter()
    const queryClient = useQueryClient()
    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async ({ json }) => {
          const response = await client.api.listings["$post"]({ json });
          if(!response.ok) throw new Error("Failed to create listing")
          return await response.json();
        },
        onSuccess: () => {
          router.refresh()
          toast.success(`Listing has been successfully created`, {
            style: {
              backgroundColor: "green",
              color:"white"
            },
          });
          queryClient.invalidateQueries({ queryKey: ["listings"] });
        },
        onError() {
          toast.error("Failed to create listing", {
            style: {
              backgroundColor: "red",
              color:"white"
            },
          });
        },
      });

    return mutation
}