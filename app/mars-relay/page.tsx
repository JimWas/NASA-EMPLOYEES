import type { Metadata } from "next";
import { MarsRelayClient } from "@/components/MarsRelayClient";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta({
  title: "Mars Relay AI",
  description: "A deep space communication simulator that shows message delay, signal travel, and AI-assisted packet optimization between Earth and Mars.",
  path: "/mars-relay",
  image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=1200&h=630&q=80",
});

export default function MarsRelayPage() {
  return <MarsRelayClient />;
}
