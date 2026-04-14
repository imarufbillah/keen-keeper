const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-10 h-10 rounded-full border-4 border-gray-200 border-t-primary animate-spin" />
        <p className="text-sm text-muted">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
