"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Dropdown from "@/components/ui/Dropdown";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "call", label: "Call" },
  { value: "text", label: "Text" },
  { value: "video", label: "Video" },
];

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
];

const TimelineControls = () => {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
      {/* Filter */}
      <Dropdown
        label="Filter by:"
        options={filterOptions}
        value={filter}
        onChange={setFilter}
      />

      <div className="flex flex-col-reverse sm:flex-row gap-3 sm:items-center">
        {/* Search */}
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
          />
          <input
            type="search"
            name="search"
            placeholder="Search timeline..."
            className="text-sm text-heading border border-gray-200 rounded-md pl-8 pr-3 py-1.5 bg-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors w-full sm:w-52"
          />
        </div>

        {/* Sort */}
        <Dropdown
          label="Sort by:"
          options={sortOptions}
          value={sort}
          onChange={setSort}
        />
      </div>
    </div>
  );
};

export default TimelineControls;
