import { Suspense } from "react";
import StatsClient from "./StatsClient";
import StatsLoadingSkeleton from "@/components/layout/stats/StatsLoadingSkeleton";

export const metadata = {
  title: "Analytics | KeenKeeper — Friendship Insights",
  description:
    "Visualize your interaction patterns, friendship health, and connection trends across your entire circle.",
};

const StatsPage = () => {
  return (
    <Suspense fallback={<StatsLoadingSkeleton />}>
      <StatsClient />
    </Suspense>
  );
};

export default StatsPage;
