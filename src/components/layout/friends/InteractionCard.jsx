const InteractionCard = ({ interaction, icon, formattedDate }) => {
  return (
    <div className="flex items-center gap-4 py-4">
      {icon}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-heading capitalize">
          {interaction.type}
        </p>
        {interaction.note && (
          <p className="text-xs text-muted truncate">{interaction.note}</p>
        )}
      </div>
      <span className="text-xs text-muted shrink-0">{formattedDate}</span>
    </div>
  );
};

export default InteractionCard;
