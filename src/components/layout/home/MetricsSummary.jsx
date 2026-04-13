const MetricsSummary = () => {
  const metrics = [
    { value: "NaN", label: "Total Friends" },
    { value: "NaN", label: "On Track" },
    { value: "NaN", label: "Need Attention" },
    { value: "NaN", label: "Interactions This Month" },
  ];

  return (
    <section className="pb-10">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map(({ value, label }) => (
          <div
            key={label}
            className="p-6 sm:p-8 bg-white rounded-xl border border-gray-100 flex flex-col gap-1.5 items-center justify-center shadow-sm"
          >
            <h2 className="text-3xl sm:text-4xl text-primary font-semibold">
              {value}
            </h2>
            <h3 className="text-sm sm:text-base text-muted text-center">
              {label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSummary;
