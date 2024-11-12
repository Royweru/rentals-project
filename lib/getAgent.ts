import { db } from "./prismadb";
export const getAgent = async (userId: string) => {
  const agent = await db.agent.findUnique({
    where: {
      userId,
    },
  });
  if (agent) return agent;
  return null;
};

export const getAgentbyId = async (agentId: string) => {
  const agent = await db.agent.findUnique({
    where: {
      id: agentId,
    },
    include: {
      properties: {
        include: {
          amenities: true,
          type: true,
          location: true,
          category: true,
          enquiries: {
            include:{
                user:true,
                listing:true
            }
          },
        },
      },
    },
  });
  if (agent) return agent;
  return null;
};
