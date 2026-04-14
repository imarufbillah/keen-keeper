"use client";

import { FriendsContext } from "@/context/FriendsContext";
import { PhoneCall, MessageSquare, Video } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

const checkInActions = [
  { label: "Call", icon: <PhoneCall size={24} strokeWidth={1.5} /> },
  { label: "Text", icon: <MessageSquare size={24} strokeWidth={1.5} /> },
  { label: "Video", icon: <Video size={24} strokeWidth={1.5} /> },
];

const toastMessages = {
  call: (name) => `📞 Called ${name} — nice catch-up!`,
  text: (name) => `💬 Texted ${name} — keeping in touch!`,
  video: (name) => `🎥 Video called ${name} — great connection!`,
};

const CheckInButtons = ({ friendName }) => {
  const { interactions, setInteractions } = useContext(FriendsContext);

  const handleCheckIn = (label) => {
    const type = label.toLowerCase();

    const newInteraction = {
      type,
      friend: friendName,
      note:
        type === "call"
          ? "Had a phone call for project follow-up"
          : type === "text"
            ? "Discussed career growth opportunities"
            : "Joined a virtual project meeting",
      date:
        type === "call"
          ? "March 29, 2026"
          : type === "text"
            ? "March 25, 2026"
            : "March 22, 2026",
    };

    setInteractions([newInteraction, ...interactions]);

    toast.success(toastMessages[type]?.(friendName), {
      style: { fontSize: "14px" },
    });
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {checkInActions.map(({ label, icon }) => (
        <button
          key={label}
          onClick={() => handleCheckIn(label)}
          className="flex flex-col items-center justify-center gap-2 py-5 rounded-lg border border-gray-200 text-sm font-medium text-heading hover:bg-gray-50 hover:border-gray-300 transition-colors"
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  );
};

export default CheckInButtons;
