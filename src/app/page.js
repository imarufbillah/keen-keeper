import FriendsContainer from "@/components/layout/home/friends/FriendsContainer";
import Hero from "@/components/layout/home/Hero";
import MetricsSummary from "@/components/layout/home/MetricsSummary";

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsSummary />
      <FriendsContainer />
    </>
  );
}
