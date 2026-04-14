const SkeletonCard = () => (
  <div className="p-5 sm:p-6 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col gap-4 items-center animate-pulse">
    {/* Avatar */}
    <div className="h-20 w-20 rounded-full bg-gray-200 shrink-0" />

    {/* Content */}
    <div className="flex flex-col gap-2 items-center w-full">
      {/* Name */}
      <div className="h-4 w-28 rounded bg-gray-200" />

      {/* Days since contact */}
      <div className="h-3 w-16 rounded bg-gray-200" />

      {/* Tags */}
      <div className="mt-0.5 flex gap-2">
        <div className="h-5 w-14 rounded-full bg-gray-200" />
        <div className="h-5 w-14 rounded-full bg-gray-200" />
      </div>

      {/* Status badge */}
      <div className="h-5 w-20 rounded-full bg-gray-200" />
    </div>
  </div>
);

const FriendsLoadingSkeleton = () => (
  <section className="pt-10 pb-20">
    <div className="container mx-auto px-4 sm:px-6">
      {/* Heading */}
      <div className="h-6 w-36 rounded bg-gray-200 animate-pulse mb-5" />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FriendsLoadingSkeleton;
