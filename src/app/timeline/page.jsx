import { PhoneCall, MessageSquare, Video, Users } from "lucide-react";
import TimelineControls from "@/components/layout/timeline/TimelineControls";
import TimelineCard from "@/components/layout/timeline/TimelineCard";

const interactionIconMap = {
  meetup: <Users size={22} strokeWidth={1.5} />,
  call: <PhoneCall size={22} strokeWidth={1.5} />,
  text: <MessageSquare size={22} strokeWidth={1.5} />,
  video: <Video size={22} strokeWidth={1.5} />,
};

const timelineItems = [
  {
    type: "call",
    friend: "Tom Baker",
    date: "March 29, 2026",
  },
  {
    type: "text",
    friend: "Tom Baker",
    date: "March 29, 2026",
  },
  {
    type: "video",
    friend: "Tom Baker",
    date: "March 29, 2026",
  },
];

const Timeline = () => {
  return (
    <section className="pt-14 md:pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-heading">
            Timeline
          </h1>
          <p className="text-sm text-muted">
            A full history of your interactions across all friends.
          </p>
        </div>

        {/* Filter + Search + Sort */}
        <TimelineControls />

        {/* Timeline Cards */}
        <div className="flex flex-col gap-3">
          {timelineItems.map((item, i) => {
            const icon =
              interactionIconMap[item.type] ?? interactionIconMap.text;

            return <TimelineCard key={i} item={item} icon={icon} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
