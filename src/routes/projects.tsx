import { createFileRoute, Outlet } from "@tanstack/react-router";
import { getUnlockStatus } from "@/lib/gate.functions";
import { redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  beforeLoad: async () => {
    const { unlocked } = await getUnlockStatus();
    if (!unlocked) throw redirect({ to: "/unlock" });
  },
  component: () => <Outlet />,
});
