"use client";

import { FriendsContext } from "@/context/FriendsContext";
import { useContext } from "react";

const MetricsSummary = () => {
  const { friends } = useContext(FriendsContext);

  // On Track count
  const onTrackCount = friends.filter(
    (friend) => friend.status === "on-track",
  ).length;

  // Need Attention count
  const needAttentionCount = friends.filter(
    (friend) => friend.status === "overdue",
  ).length;

  // Interaction count
  const { interactions } = useContext(FriendsContext);

  const metrics = [
    { value: `${friends.length}`, label: "Total Friends" },
    { value: `${onTrackCount}`, label: "On Track" },
    { value: `${needAttentionCount}`, label: "Need Attention" },
    { value: `${interactions.length}`, label: "Interactions This Month" },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 space-y-10">
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map(({ value, label }) => (
          <div
            key={label}
            className="h-36 p-6 sm:p-8 bg-white rounded-xl border border-[#E9E9E9] flex flex-col items-center justify-center shadow-sm"
          >
            <h2 className="text-3xl sm:text-4xl text-primary font-semibold mb-1.5">
              {value}
            </h2>
            <h3 className="text-sm sm:text-base text-muted text-center">
              {label}
            </h3>
          </div>
        ))}
      </div>
      <hr className="text-[#E9E9E9]" />
    </section>
  );
};

export default MetricsSummary;
