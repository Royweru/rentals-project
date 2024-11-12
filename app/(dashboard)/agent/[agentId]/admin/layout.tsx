import React from "react";
import { redirect } from "next/navigation";
import { serverUser } from "@/lib/serveruser";
import { getAgent } from "@/lib/getAgent";
import { Button } from "@/components/ui/button";
import { AgentDashboardNav } from "@/features/agent/_components/agent-dashboard-nav";
import { Sidebar } from "@/features/agent/_components/sibebar";
const AgentAdminDashboard = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await serverUser();
  if (!user) return redirect("/auth");

  const agent = await getAgent(user.id);
  if (!agent) {
    return (
      <div className=" min-h-screen w-full flex items-center justify-center">
        <div className=" flex flex-col items-center gap-y-4">
          <h3 className=" lg:text-4xl text-3xl font-bold text-accent-desructive">
            Looks like you are not an agent or you used to be one but you are no
            longer one
          </h3>
          <p className=" font-normal text-md font-nunito text-text-blackgrey">
            Feel free to go ahead and apply to be agent
          </p>
          <a href="/agent/new">
            <Button variant={"link"} size={"lg"}>
              Be agent
            </Button>
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className=" min-h-screen bg-bg-secondary w-full lg:p-20 md:p-16 p-8">
        {children}
    </div>
  );
};

export default AgentAdminDashboard;
