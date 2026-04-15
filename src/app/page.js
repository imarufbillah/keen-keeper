import { Suspense } from "react";

export const metadata = {
  title: "Home | KeenKeeper — Friends to keep close in your life",
  description:
    "Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
};
import FriendsContainer from "@/components/layout/home/friends/FriendsContainer";
import FriendsLoadingSkeleton from "@/components/layout/home/friends/FriendsLoadingSkeleton";
import Hero from "@/components/layout/home/Hero";
import MetricsSummary from "@/components/layout/home/MetricsSummary";

const Home = async () => {
  return (
    <>
      <Hero />
      <MetricsSummary />
      <Suspense fallback={<FriendsLoadingSkeleton />}>
        <FriendsContainer />
      </Suspense>
    </>
  );
};

export default Home;
