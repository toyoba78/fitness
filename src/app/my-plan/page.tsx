"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePlan } from "@/context/planContext";

const MyPlan = () => {
  const {
    plan,
    saved,
    loading,
    removeFromPlan,
    removeSaved,
    doneIds,
    markAsDone,
  } = usePlan();

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState("duration");

  const currentList = activeTab === "today" ? plan : saved;

  const sortedList = [...currentList].sort((a, b) => {
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

  const totalMinutes = currentList.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = currentList.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white px-4 md:px-6 py-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-5">
          <h1 className="text-xl md:text-2xl font-bold uppercase">
            MY PLAN
          </h1>

          <p className="text-gray-500 text-[10px] md:text-xs mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        
        <div className="bg-[#15181e] border border-[#20242c] rounded-lg grid grid-cols-3 mb-4">

          <div className="px-4 py-4 border-r border-[#252a32]">
            <p className="text-[9px] text-gray-500 uppercase">
              Exercises
            </p>

            <p className="text-xl md:text-2xl font-bold text-[#ccff00] mt-2">
              {currentList.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="px-4 py-4 border-r border-[#252a32]">
            <p className="text-[9px] text-gray-500 uppercase">
              Minutes
            </p>

            <p className="text-xl md:text-2xl font-bold mt-2">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="px-4 py-4">
            <p className="text-[9px] text-gray-500 uppercase">
              Calories
            </p>

            <p className="text-xl md:text-2xl font-bold mt-2">
              {totalCalories}
            </p>
          </div>

        </div>

        <div className="flex items-center justify-between mb-4">

         {/* button */}
          <div className="flex gap-1">

            <button
              onClick={() => setActiveTab("today")}
              className={`px-4 py-2 rounded-md text-[10px] font-semibold ${
                activeTab === "today"
                  ? "bg-[#15181e] text-white border border-[#303640]"
                  : "text-gray-500"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`px-4 py-2 rounded-md text-[10px] font-semibold ${
                activeTab === "saved"
                  ? "bg-[#15181e] text-white border border-[#303640]"
                  : "text-gray-500"
              }`}
            >
              Saved
            </button>

          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">

            <span className="text-[9px] text-gray-500">
              Sort By
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#15181e] border border-[#303640] text-gray-300 rounded-md text-[9px] px-3 py-1.5 pr-7 outline-none cursor-pointer"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-[7px] pointer-events-none">
                ▼
              </span>
            </div>

          </div>

        </div>

        {/* Loading */}
        {loading ? (

          <div className="min-h-[250px] bg-[#101318] border border-[#20242c] rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-xs">
              Loading workouts...
            </p>
          </div>

        ) : sortedList.length === 0 ? (

          /* Empty State */
          <div className="min-h-[250px] bg-[#101318] border border-[#20242c] rounded-lg flex flex-col items-center justify-center text-center px-4">

            <h2 className="text-sm font-bold uppercase">
              NOTHING HERE YET
            </h2>

            <p className="text-gray-500 text-xs mt-2">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-5 bg-[#ccff00] text-black px-5 py-2 rounded-md text-[10px] font-bold uppercase"
            >
              Go to workouts
            </Link>

          </div>

        ) : (

          /* Workout List */
          <div className="space-y-2">

            {sortedList.map((workout) => {

              const isDone = doneIds.includes(workout.id);

              return (
                <div
                  key={workout.id}
                  className="bg-[#15181e] border border-[#20242c] rounded-lg px-3 py-2.5 flex items-center gap-3"
                >

                  {/* Image */}
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    width={70}
                    height={45}
                    className="w-14 h-10 md:w-16 md:h-11 object-cover rounded-md shrink-0"
                  />

                  {/* Workout Information */}
                  <div className="flex-1 min-w-0">

                    <h3
                      className={`text-[10px] md:text-xs font-bold uppercase truncate ${
                        isDone ? "line-through text-gray-500" : "text-white"
                      }`}
                    >
                      {workout.name}
                    </h3>

                    <p className="text-gray-500 text-[8px] md:text-[9px] mt-0.5">
                      {workout.equipment}
                    </p>

                    <div className="flex items-center gap-2 md:gap-3 mt-1 text-[7px] md:text-[8px] text-gray-400">

                      <span>
                        ◷ {workout.duration} min
                      </span>

                      <span>
                        ◉ {workout.caloriesBurned} kcal
                      </span>

                      <span>
                        ★ {workout.rating}
                      </span>

                    </div>

                  </div>

                 
                  <div className="flex items-center gap-2 shrink-0">

                    {/* View Details */}
                    <Link
                      href={`/workout/${workout.id}`}
                      className="border border-[#303640] text-gray-300 px-3 py-1.5 rounded-md text-[8px] md:text-[9px] hover:border-[#ccff00] hover:text-white transition"
                    >
                      View Details
                    </Link>

                    {/* Mark as Done */}
                    {activeTab === "today" && (
                      <button
                        onClick={() => markAsDone(workout.id)}
                        disabled={isDone}
                        className={`px-3 py-1.5 rounded-md text-[8px] md:text-[9px] font-bold transition ${
                          isDone
                            ? "bg-[#ccff00] text-black cursor-not-allowed"
                            : "bg-[#ccff00] text-black hover:bg-[#b8e600]"
                        }`}
                      >
                        ✓ {isDone ? "Done" : "Mark as Done"}
                      </button>
                    )}

                    {/* Remove X */}
                    <button
                      onClick={() =>
                        activeTab === "today"
                          ? removeFromPlan(workout.id)
                          : removeSaved(workout.id)
                      }
                      className="text-gray-500 hover:text-red-400 text-sm px-1 transition"
                      aria-label="Remove workout"
                    >
                      ×
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

        )}

      </div>
    </main>
  );
};

export default MyPlan;