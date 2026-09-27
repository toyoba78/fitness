"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ILibrary } from "@/types/Librarys.type";

interface PlanContextType {
  plan: ILibrary[];
  saved: ILibrary[];
  loading: boolean;
  doneIds: number[];
  addToPlan: (workout: ILibrary) => void;
  removeFromPlan: (id: number) => void;
  saveWorkout: (workout: ILibrary) => void;
  removeSaved: (id: number) => void;
  markAsDone: (id: number) => void;
  toast: string;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<ILibrary[]>([]);
  const [saved, setSaved] = useState<ILibrary[]>([]);
  const [doneIds, setDoneIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const savedWorkouts = localStorage.getItem("fitlog-saved");
    const savedDoneIds = localStorage.getItem("fitlog-done");

    if (savedPlan) {
      setPlan(JSON.parse(savedPlan));
    }

    if (savedWorkouts) {
      setSaved(JSON.parse(savedWorkouts));
    }

    if (savedDoneIds) {
      setDoneIds(JSON.parse(savedDoneIds));
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem("fitlog-done", JSON.stringify(doneIds));
  }, [doneIds]);

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const addToPlan = (workout: ILibrary) => {
    if (plan.length >= 5) {
      showToast("You can add maximum 5 workouts for today.");
      return;
    }

    if (plan.some((item) => item.id === workout.id)) {
      showToast("This workout is already in today's plan.");
      return;
    }

    setPlan((prev) => [...prev, workout]);
    showToast("Added to today's plan!");
  };

  const removeFromPlan = (id: number) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));

    setDoneIds((prev) => prev.filter((doneId) => doneId !== id));

    showToast("Removed from today's plan.");
  };

  const saveWorkout = (workout: ILibrary) => {
    if (saved.some((item) => item.id === workout.id)) {
      showToast("This workout is already saved.");
      return;
    }

    setSaved((prev) => [...prev, workout]);
    showToast("Saved for later!");
  };

  const removeSaved = (id: number) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
    showToast("Removed from saved.");
  };

  const markAsDone = (id: number) => {
    if (doneIds.includes(id)) {
      showToast("Workout is already marked as done.");
      return;
    }

    setDoneIds((prev) => [...prev, id]);
    showToast("Workout marked as done!");
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        loading,
        doneIds,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
        markAsDone,
        toast,
      }}
    >
      {children}

      {toast && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-[#ccff00] text-black px-5 py-3 rounded-md shadow-lg text-sm font-bold">
            {toast}
          </div>
        </div>
      )}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used inside PlanProvider");
  }

  return context;
};