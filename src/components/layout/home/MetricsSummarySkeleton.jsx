const MetricsSummarySkeleton = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 space-y-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-36 p-6 sm:p-8 bg-white rounded-xl border border-[#E9E9E9] flex flex-col items-center justify-center shadow-sm gap-2"
          >
            <div className="h-9 w-14 rounded-lg bg-gray-200 animate-pulse" />
            <div className="h-4 w-28 rounded bg-gray-200 animate-pulse" />
          </div>
        ))}
      </div>
      <hr className="text-[#E9E9E9]" />
    </section>
  );
};

export default MetricsSummarySkeleton;
