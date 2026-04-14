"use client";

import { PhoneCall, MessageSquare, Video } from "lucide-react";
import TimelineCard from "./TimelineCard";
import { useContext } from "react";
import { FriendsContext } from "@/context/FriendsContext";

const interactionIconMap = {
  call: <PhoneCall size={22} strokeWidth={1.5} />,
  text: <MessageSquare size={22} strokeWidth={1.5} />,
  video: <Video size={22} strokeWidth={1.5} />,
};

const RenderTimelineCards = () => {
  const { interactions } = useContext(FriendsContext);

  return (
    <div className="flex flex-col gap-3">
      {interactions.map((item, i) => {
        const icon = interactionIconMap[item.type] ?? interactionIconMap.text;

        return <TimelineCard key={i} item={item} icon={icon} />;
      })}
    </div>
  );
};

export default RenderTimelineCards;
