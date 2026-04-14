import TimelineControls from "@/components/layout/timeline/TimelineControls";

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
      </div>
    </section>
  );
};

export default Timeline;
