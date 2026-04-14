const typeStyles = {
  call: { bg: "bg-emerald-100", text: "text-emerald-700" },
  text: { bg: "bg-violet-100", text: "text-violet-600" },
  video: { bg: "bg-sky-100", text: "text-sky-600" },
  meetup: { bg: "bg-amber-100", text: "text-amber-600" },
};

const TimelineCard = ({ item, icon }) => {
  const { bg, text } = typeStyles[item.type?.toLowerCase()] ?? {
    bg: "bg-gray-100",
    text: "text-gray-500",
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5 flex items-center gap-4 hover:shadow-md transition-shadow duration-200">
      {/* Icon */}
      <div className={`p-2.5 rounded-lg shrink-0 ${bg} ${text}`}>{icon}</div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-medium text-heading capitalize">
          {item.type}{" "}
          <span className="text-muted font-normal">with {item.friend}</span>
        </h3>
        <span className="text-sm text-muted">{item.note}</span>
      </div>
      {/* Date */}
      <span className="text-xs text-muted shrink-0">{item.date}</span>
    </div>
  );
};

export default TimelineCard;
