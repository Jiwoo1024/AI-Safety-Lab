import { createFileRoute, Outlet } from "@tanstack/react-router";
import { requireUnlocked } from "@/lib/gate.functions";

export const Route = createFileRoute("/projects")({
  beforeLoad: () => requireUnlocked(),
  component: () => <Outlet />,
});
