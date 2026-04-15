const SkeletonBlock = ({ className }) => (
  <div className={`bg-gray-200 rounded-lg animate-pulse ${className}`} />
);

const FriendDetailsSkeleton = () => {
  return (
    <section className="pt-14 md:pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-6">
        {/* ── Left Sidebar ── */}
        <div className="w-full lg:w-72 shrink-0 flex flex-col gap-4">
          {/* Profile Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col items-center gap-3">
            {/* Avatar */}
            <div className="h-24 w-24 rounded-full bg-gray-200 animate-pulse" />
            {/* Name */}
            <SkeletonBlock className="h-5 w-32" />
            {/* Tags */}
            <div className="flex gap-2">
              <SkeletonBlock className="h-5 w-14 rounded-full" />
              <SkeletonBlock className="h-5 w-14 rounded-full" />
            </div>
            {/* Status */}
            <SkeletonBlock className="h-5 w-20 rounded-full" />
            {/* Bio */}
            <SkeletonBlock className="h-4 w-48" />
            <SkeletonBlock className="h-4 w-36" />
            {/* Email */}
            <SkeletonBlock className="h-3 w-40" />
          </div>

          {/* Actions Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-100">
            {[1, 2, 3].map((i) => (
              <div key={i} className="px-6 py-4 flex justify-center">
                <SkeletonBlock className="h-4 w-32" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Metrics Row */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="grid grid-cols-3 divide-x divide-gray-100">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center py-6 px-4 gap-2"
                >
                  <SkeletonBlock className="h-8 w-16" />
                  <SkeletonBlock className="h-3 w-24" />
                </div>
              ))}
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-3">
              <SkeletonBlock className="h-5 w-40" />
              <SkeletonBlock className="h-7 w-12 rounded-md" />
            </div>
            <SkeletonBlock className="h-4 w-56" />
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <SkeletonBlock className="h-5 w-36 mb-4" />
            <div className="flex gap-3">
              <SkeletonBlock className="h-9 w-24 rounded-md" />
              <SkeletonBlock className="h-9 w-24 rounded-md" />
              <SkeletonBlock className="h-9 w-24 rounded-md" />
            </div>
          </div>

          {/* Recent Interactions */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <SkeletonBlock className="h-5 w-44" />
              <SkeletonBlock className="h-7 w-28 rounded-md" />
            </div>
            <div className="flex flex-col gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg border border-gray-100"
                >
                  <SkeletonBlock className="h-8 w-8 rounded-full shrink-0" />
                  <div className="flex flex-col gap-2 flex-1">
                    <SkeletonBlock className="h-4 w-32" />
                    <SkeletonBlock className="h-3 w-full" />
                    <SkeletonBlock className="h-3 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendDetailsSkeleton;
