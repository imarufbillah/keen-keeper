"use client";

import ChartCard from "@/components/layout/stats/ChartCard";
import { FriendsContext } from "@/context/FriendsContext";
import {
  PhoneCall,
  MessageSquare,
  Video,
  Users,
  TrendingUp,
} from "lucide-react";
import { useContext } from "react";

const StatsPage = () => {
  const { interactions, friends } = useContext(FriendsContext);

  // Data: By Interaction Type
  const text = interactions.filter(
    (interact) => interact.type === "text",
  ).length;
  const call = interactions.filter(
    (interact) => interact.type === "call",
  ).length;
  const video = interactions.filter(
    (interact) => interact.type === "video",
  ).length;

  // Data: By Friendship Status
  const onTrack = friends.filter(
    (friend) => friend.status === "on-track",
  ).length;
  const almostDue = friends.filter(
    (friend) => friend.status === "almost due",
  ).length;
  const overdue = friends.filter(
    (friend) => friend.status === "overdue",
  ).length;

  const summaryCards = [
    {
      label: "Total Friends",
      value: friends.length,
      icon: <Users size={20} strokeWidth={1.5} />,
      color: "text-primary bg-primary/10",
    },
    {
      label: "Total Interactions",
      value: interactions.length,
      icon: <TrendingUp size={20} strokeWidth={1.5} />,
      color: "text-violet-600 bg-violet-100",
    },
    {
      label: "Calls Made",
      value: call,
      icon: <PhoneCall size={20} strokeWidth={1.5} />,
      color: "text-emerald-600 bg-emerald-100",
    },
    {
      label: "Texts Sent",
      value: text,
      icon: <MessageSquare size={20} strokeWidth={1.5} />,
      color: "text-violet-600 bg-violet-100",
    },
    {
      label: "Video Calls",
      value: video,
      icon: <Video size={20} strokeWidth={1.5} />,
      color: "text-primary bg-primary/10",
    },
  ];

  const interactionBreakdown = [
    { label: "Text", count: text, color: "#7c3aed" },
    { label: "Call", count: call, color: "#244d3f" },
    { label: "Video", count: video, color: "#10b981" },
  ];

  const statusBreakdown = [
    { label: "On-track", count: onTrack, color: "#10b981" },
    { label: "Almost Due", count: almostDue, color: "#f59e0b" },
    { label: "Overdue", count: overdue, color: "#ef4444" },
  ];

  return (
    <section className="pt-14 md:pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-heading">
            Friendship Analytics
          </h1>
          <p className="text-sm text-muted">
            An overview of your interactions and friendship health.
          </p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {summaryCards.map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3"
            >
              <span
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${card.color}`}
              >
                {card.icon}
              </span>
              <div>
                <p className="text-2xl font-bold text-heading">{card.value}</p>
                <p className="text-xs text-muted mt-0.5">{card.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ChartCard
            title="By Interaction Type"
            segments={interactionBreakdown}
          />
          <ChartCard title="By Friendship Status" segments={statusBreakdown} />
        </div>
      </div>
    </section>
  );
};

export default StatsPage;
