import { Suspense } from "react";
import FriendsContainer from "@/components/layout/home/friends/FriendsContainer";
import FriendsLoadingSkeleton from "@/components/layout/home/friends/FriendsLoadingSkeleton";
import Hero from "@/components/layout/home/Hero";
import MetricsSummary from "@/components/layout/home/MetricsSummary";

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsSummary />
      <Suspense fallback={<FriendsLoadingSkeleton />}>
        <FriendsContainer />
      </Suspense>
    </>
  );
}
