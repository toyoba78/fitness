"use client";

import { useState } from "react";
import LibraryCard from "../shared/LibraryCard";
import { ILibrary } from "@/types/Librarys.type";

interface LibraryContentProps {
  libraryData: ILibrary[];
}

const LibraryContent = ({ libraryData }: LibraryContentProps) => {
  const [sortBy, setSortBy] = useState("duration");

  const sortedData = [...libraryData].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <>
      {/* Sort */}
      <div className="flex justify-end mb-6">
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-[#15181e] border border-[#303640] text-white text-sm rounded-md px-4 py-2.5 pr-10 outline-none cursor-pointer"
          >
            <option value="duration">Sort By: Duration</option>
            <option value="calories">Sort By: Calories</option>
            <option value="rating">Sort By: Rating</option>
          </select>

          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            ▼
          </span>
        </div>
      </div>

      {/* Workout Cards */}
      <LibraryCard libraryData={sortedData} />
    </>
  );
};

export default LibraryContent;