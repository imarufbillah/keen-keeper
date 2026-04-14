"use client";

import { MessageSquare, PhoneCall, Video } from "lucide-react";
import InteractionCard from "./InteractionCard";
import { useContext } from "react";
import { FriendsContext } from "@/context/FriendsContext";

// Icon map for interaction types
const interactionIconMap = {
  text: (
    <MessageSquare
      size={20}
      strokeWidth={1.5}
      className="text-muted shrink-0"
    />
  ),
  call: (
    <PhoneCall size={20} strokeWidth={1.5} className="text-muted shrink-0" />
  ),
  video: <Video size={20} strokeWidth={1.5} className="text-muted shrink-0" />,
};

const RenderInteractionCards = ({ friend }) => {
  const { interactions } = useContext(FriendsContext);
  const friendInteractions = interactions.filter(
    (interaction) => interaction.friend === friend.name,
  );
  return (
    <>
      {friendInteractions && friendInteractions.length > 0 ? (
        <div className="flex flex-col divide-y divide-gray-100">
          {friendInteractions.map((interaction, i) => {
            const icon =
              interactionIconMap[interaction.type?.toLowerCase()] ??
              interactionIconMap.text;

            const formattedDate = new Date(interaction.date).toLocaleDateString(
              "en-US",
              {
                month: "short",
                day: "numeric",
                year: "numeric",
              },
            );

            return (
              <InteractionCard
                key={i}
                interaction={interaction}
                icon={icon}
                formattedDate={formattedDate}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-muted">No interactions recorded yet.</p>
      )}
    </>
  );
};

export default RenderInteractionCards;
