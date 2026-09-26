"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ILibrary } from "@/types/Librarys.type";

interface PlanContextType {
  plan: ILibrary[];
  saved: ILibrary[];
  addToPlan: (workout: ILibrary) => void;
  removeFromPlan: (id: number) => void;
  saveWorkout: (workout: ILibrary) => void;
  removeSaved: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<ILibrary[]>([]);
  const [saved, setSaved] = useState<ILibrary[]>([]);

  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const savedWorkouts = localStorage.getItem("fitlog-saved");

    if (savedPlan) {
      setPlan(JSON.parse(savedPlan));
    }

    if (savedWorkouts) {
      setSaved(JSON.parse(savedWorkouts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  const addToPlan = (workout: ILibrary) => {
    if (plan.length >= 5) {
      alert("You can add maximum 5 workouts for today.");
      return;
    }

    if (plan.some((item) => item.id === workout.id)) {
      alert("This workout is already in today's plan.");
      return;
    }

    setPlan((prev) => [...prev, workout]);
    alert("Added to today's plan!");
  };

  const removeFromPlan = (id: number) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
  };

  const saveWorkout = (workout: ILibrary) => {
    if (saved.some((item) => item.id === workout.id)) {
      alert("This workout is already saved.");
      return;
    }

    setSaved((prev) => [...prev, workout]);
    alert("Saved for later!");
  };

  const removeSaved = (id: number) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
      }}
    >
      {children}
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