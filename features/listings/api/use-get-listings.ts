import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";


export const useGetListings = ({
 categoryId,
 typeId,
 locationId
}:{
    locationId?:string,
    typeId?:string,
    categoryId?:string,
   
}) => {

  const query = useQuery({
    queryKey: ["listings",
      locationId,
      categoryId,
      typeId
    ],
    queryFn: async () => {
      const response = await client.api.listings.$get({
        query:{
          locationId:locationId?? undefined,
          categoryId:categoryId??undefined,
          typeId:typeId??undefined
        }
      });

      if (!response.ok) throw new Error("Failed to fetch tasks");

      const { data } = await response.json();
      console.log(data)
      return data;
    },
  });

  return query;
};
