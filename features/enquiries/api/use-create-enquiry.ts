import { useQueryClient, useMutation } from "@tanstack/react-query";
import { InferRequestType,InferResponseType } from "hono";

import {client} from '@/lib/rpc'
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.enquiries["$post"],200>
type RequestType = InferRequestType<typeof client.api.enquiries["$post"]>

export const useCreateEnquiry= ()=>{
    const queryClient = useQueryClient()
    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async ({ json }) => {
          const response = await client.api.enquiries["$post"]({ json });
          if(!response.ok) throw new Error("Failed to create enquiry")
          return await response.json();
        },
        onSuccess: ({data}) => {
          toast.success(`Enquiry has been successfully sent !`, {
            style: {
              backgroundColor: "green",
              color:"white"
            },
          });
          queryClient.invalidateQueries({ queryKey: ["enquiries"] });
        },
        onError() {
          toast.error("Failed to create task", {
            style: {
              backgroundColor: "red",
              color:"white"
            },
          });
        },
      });

    return mutation
}