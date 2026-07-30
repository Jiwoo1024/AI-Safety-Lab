import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";
import { getGateSessionConfig, passwordMatches, type GateSession } from "@/lib/gate.server";

export const unlockSite = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    const expected = process.env.SITE_PASSWORD;
    if (!expected) throw new Error("SITE_PASSWORD is not set");
    if (!passwordMatches(data.password ?? "", expected)) {
      return { ok: false as const };
    }
    const session = await useSession<GateSession>(getGateSessionConfig());
    await session.update({ unlocked: true });
    return { ok: true as const };
  });

export const getUnlockStatus = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useSession<GateSession>(getGateSessionConfig());
  return { unlocked: session.data.unlocked === true };
});

export const lockSite = createServerFn({ method: "POST" }).handler(async () => {
  const session = await useSession<GateSession>(getGateSessionConfig());
  await session.clear();
  return { ok: true as const };
});
