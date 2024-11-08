import { useQueryClient, useMutation } from "@tanstack/react-query";
import { InferRequestType,InferResponseType } from "hono";

import {client} from '@/lib/rpc'
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.agent["$post"],200>
type RequestType = InferRequestType<typeof client.api.agent["$post"]>

export const useCreateAgent = ()=>{
    const queryClient = useQueryClient()
    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async ({ json }) => {
          const response = await client.api.agent["$post"]({ json });
          if(!response.ok) throw new Error("Failed to create agent")
          return await response.json();
        },
        onSuccess: ({data}) => {
          toast.success(`Agent ${data.agentName} has been successfully created`, {
            style: {
              backgroundColor: "green",
              color:"white"
            },
          });
          queryClient.invalidateQueries({ queryKey: ["agent"] });
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