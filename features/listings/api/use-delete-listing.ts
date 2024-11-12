import { useQueryClient, useMutation } from "@tanstack/react-query";
import { InferRequestType,InferResponseType } from "hono";

import {client} from '@/lib/rpc'
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<typeof client.api.listings[":listingId"]["$delete"],200>
type RequestType = InferRequestType<typeof client.api.listings[":listingId"]["$delete"]>

export const useDeleteListing = ()=>{
    const router = useRouter()
    const queryClient = useQueryClient()
    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async ({ param }) => {
          const response = await client.api.listings[":listingId"]["$delete"]({ param });
          if(!response.ok) throw new Error("Failed to delete listing")
          return await response.json();
        },
        onSuccess: ({data}) => {
          router.refresh()
          toast.success(`Listing has been successfully deleted`, {
            style: {
              backgroundColor: "green",
              color:"white"
            },
          });
          queryClient.invalidateQueries({ queryKey: ["listing",data.id]})
        },
        onError() {
          toast.error("Failed to delete listing", {
            style: {
              backgroundColor: "red",
              color:"white"
            },
          });
        },
      });

    return mutation
}