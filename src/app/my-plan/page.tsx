"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePlan } from "@/context/planContext";

const MyPlan = () => {
  const { plan, saved, removeFromPlan } = usePlan();
  console.log("MY PLAN DATA:", plan);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const currentList = activeTab === "today" ? plan : saved;

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white px-4 md:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold uppercase">
            MY PLAN
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 md:gap-5 mb-5">

          <div className="bg-[#15181e] border border-[#20242c] rounded-lg px-4 py-4">
            <p className="text-[10px] md:text-xs text-gray-500 uppercase">
              Exercises
            </p>

            <p className="text-xl md:text-2xl font-bold text-[#ccff00] mt-2">
              {plan.length}
            </p>
          </div>

          <div className="bg-[#15181e] border border-[#20242c] rounded-lg px-4 py-4">
            <p className="text-[10px] md:text-xs text-gray-500 uppercase">
              Minutes
            </p>

            <p className="text-xl md:text-2xl font-bold mt-2">
              {totalMinutes}
            </p>
          </div>

          <div className="bg-[#15181e] border border-[#20242c] rounded-lg px-4 py-4">
            <p className="text-[10px] md:text-xs text-gray-500 uppercase">
              Calories
            </p>

            <p className="text-xl md:text-2xl font-bold mt-2">
              {totalCalories}
            </p>
          </div>

        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">

          <button
            onClick={() => setActiveTab("today")}
            className={`px-4 py-2 rounded-md text-xs font-bold ${
              activeTab === "today"
                ? "bg-[#ccff00] text-black"
                : "bg-[#15181e] border border-[#272c35] text-gray-400"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-4 py-2 rounded-md text-xs font-bold ${
              activeTab === "saved"
                ? "bg-[#ccff00] text-black"
                : "bg-[#15181e] border border-[#272c35] text-gray-400"
            }`}
          >
            Saved
          </button>

        </div>

        {/* Workout List */}
        {currentList.length === 0 ? (

          <div className="min-h-[300px] bg-[#101318] border border-[#20242c] rounded-lg flex flex-col items-center justify-center text-center px-4">

            <h2 className="text-sm md:text-base font-bold uppercase">
              NOTHING HERE YET
            </h2>

            <p className="text-gray-500 text-xs md:text-sm mt-2 max-w-md">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-5 bg-[#ccff00] text-black px-5 py-2.5 rounded-md text-xs font-bold uppercase"
            >
              Go to workouts
            </Link>

          </div>

        ) : (

          <div className="space-y-3">

            {currentList.map((workout) => (

              <div
                key={workout.id}
                className="bg-[#15181e] border border-[#20242c] rounded-lg p-3 md:p-4 flex flex-col md:flex-row md:items-center gap-4"
              >

                {/* Image */}
                <Image
                  src={workout.image}
                  alt={workout.name}
                  width={120}
                  height={80}
                  className="w-full md:w-28 h-20 object-cover rounded-md"
                />

                {/* Information */}
                <div className="flex-1">

                  <h3 className="font-bold uppercase text-sm">
                    {workout.name}
                  </h3>

                  <p className="text-gray-500 text-xs mt-1">
                    {workout.equipment}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-400">
                    <span>{workout.duration} min</span>
                    <span>{workout.caloriesBurned} kcal</span>
                    <span>⭐ {workout.rating}</span>
                  </div>

                </div>

                {/* Buttons */}
                <div className="flex gap-2">

                  <Link
                    href={`/workout/${workout.id}`}
                    className="border border-[#303640] px-3 py-2 rounded-md text-xs"
                  >
                    View Details
                  </Link>

                  {activeTab === "today" && (
                    <button
                      onClick={() => removeFromPlan(workout.id)}
                      className="border border-red-500 text-red-400 px-3 py-2 rounded-md text-xs"
                    >
                      Remove
                    </button>
                  )}

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </main>
  );
};

export default MyPlan;