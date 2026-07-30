import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";

import { createHash, timingSafeEqual } from "node:crypto";

const sessionConfig = {
  password: process.env.SESSION_SECRET ?? "dev-only-fallback-session-secret-32chars!!",
  name: "site-gate",
  maxAge: 60 * 60 * 24 * 7,
  cookie: { httpOnly: true, secure: true, sameSite: "lax" as const, path: "/" },
};

type GateSession = { unlocked?: boolean };

function passwordMatches(input: string, expected: string): boolean {
  const a = createHash("sha256").update(input, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

export const unlockSite = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    const expected = process.env.SITE_PASSWORD;
    if (!expected) throw new Error("SITE_PASSWORD is not set");
    if (!passwordMatches(data.password ?? "", expected)) {
      return { ok: false as const };
    }
    const session = await useSession<GateSession>(sessionConfig);
    await session.update({ unlocked: true });
    return { ok: true as const };
  });

export const getUnlockStatus = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useSession<GateSession>(sessionConfig);
  return { unlocked: session.data.unlocked === true };
});

export const lockSite = createServerFn({ method: "POST" }).handler(async () => {
  const session = await useSession<GateSession>(sessionConfig);
  await session.clear();
  return { ok: true as const };
});
