const TimelineCard = ({ item, icon }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5 flex items-center gap-4 hover:shadow-md transition-shadow duration-200">
      {/* Icon */}
      <div className="p-2.5 rounded-lg bg-[#CBFADB] text-primary shrink-0">
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-medium text-heading capitalize">
          {item.type}{" "}
          <span className="text-muted font-normal">with {item.friend}</span>
        </h3>
        {/* Date */}
        <span className="text-xs text-muted shrink-0">{item.date}</span>
      </div>
    </div>
  );
};

export default TimelineCard;
