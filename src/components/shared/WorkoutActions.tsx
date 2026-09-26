"use client";

import { ILibrary } from "@/types/Librarys.type";
import { usePlan } from "@/context/planContext";

const WorkoutActions = ({ workout }: { workout: ILibrary }) => {
  const { addToPlan, saveWorkout } = usePlan();

  return (
    <div className="flex flex-wrap gap-3 mt-7">
      <button
        onClick={() => addToPlan(workout)}
        className="bg-[#ccff00] text-black px-5 py-3 rounded-md text-sm font-bold"
      >
        🗓 Add to today's plan
      </button>

      <button
        onClick={() => saveWorkout(workout)}
        className="border border-[#303640] text-white px-5 py-3 rounded-md text-sm font-bold"
      >
        ♡ Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;