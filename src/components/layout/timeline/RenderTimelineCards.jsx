"use client";

import { PhoneCall, MessageSquare, Video } from "lucide-react";
import TimelineCard from "./TimelineCard";
import { useContext, useMemo } from "react";
import { FriendsContext } from "@/context/FriendsContext";

const interactionIconMap = {
  call: <PhoneCall size={22} strokeWidth={1.5} />,
  text: <MessageSquare size={22} strokeWidth={1.5} />,
  video: <Video size={22} strokeWidth={1.5} />,
};

const RenderTimelineCards = () => {
  const {
    interactions,
    timelineFilter,
    timelineSort,
    timelineSearch,
  } = useContext(FriendsContext);

  const filtered = useMemo(() => {
    let result = [...interactions];

    // Filter by type
    if (timelineFilter !== "all") {
      result = result.filter(
        (item) => item.type?.toLowerCase() === timelineFilter
      );
    }

    // Search by friend name or note
    if (timelineSearch.trim()) {
      const query = timelineSearch.toLowerCase();
      result = result.filter(
        (item) =>
          item.friend?.toLowerCase().includes(query) ||
          item.note?.toLowerCase().includes(query)
      );
    }

    // Sort by date
    if (timelineSort === "newest" || timelineSort === "oldest") {
      result.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return timelineSort === "newest" ? dateB - dateA : dateA - dateB;
      });
    }

    return result;
  }, [interactions, timelineFilter, timelineSort, timelineSearch]);

  if (filtered.length === 0) {
    return (
      <p className="text-sm text-muted text-center py-10">
        No interactions match your filters.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {filtered.map((item, i) => {
        const icon = interactionIconMap[item.type] ?? interactionIconMap.text;
        return <TimelineCard key={i} item={item} icon={icon} />;
      })}
    </div>
  );
};

export default RenderTimelineCards;
