import type { Metadata } from "next";
import { MarsRelayClient } from "@/components/MarsRelayClient";

export const metadata: Metadata = {
  title: "Mars Relay AI",
  description:
    "A deep space communication simulator that shows message delay, signal travel, and AI-assisted packet optimization between Earth and Mars."
};

export default function MarsRelayPage() {
  return <MarsRelayClient />;
}
