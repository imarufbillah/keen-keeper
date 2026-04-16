const SkeletonBlock = ({ className }) => (
  <div className={`bg-gray-200 rounded-lg animate-pulse ${className}`} />
);

const StatsLoadingSkeleton = () => {
  return (
    <section className="pt-14 md:pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <SkeletonBlock className="h-8 w-56" />
          <SkeletonBlock className="h-4 w-72" />
        </div>

        {/* Summary cards — 5 across on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3"
            >
              <SkeletonBlock className="w-9 h-9 rounded-lg" />
              <div className="flex flex-col gap-1.5">
                <SkeletonBlock className="h-7 w-10" />
                <SkeletonBlock className="h-3 w-24" />
              </div>
            </div>
          ))}
        </div>

        {/* Chart cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sm:p-6 flex flex-col gap-4"
            >
              {/* Chart title */}
              <SkeletonBlock className="h-4 w-36" />
              {/* Donut circle */}
              <div className="flex justify-center">
                <div className="w-40 h-40 rounded-full bg-gray-200 animate-pulse" />
              </div>
              {/* Legend */}
              <div className="flex justify-center gap-5">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-gray-200 animate-pulse" />
                    <SkeletonBlock className="h-3 w-12" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsLoadingSkeleton;
