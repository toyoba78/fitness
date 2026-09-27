import Image from "next/image";
import WorkoutActions from "@/components/shared/WorkoutActions";

interface WorkoutDetailsProps {
  params: Promise<{ id: string }>;
}

const WorkoutDetails = async ({ params }: WorkoutDetailsProps) => {
  const { id } = await params;

  let libraryData;

  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/LibraryData.json`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to load workout data");
    }

    libraryData = await response.json();
  } catch (error) {
    console.error("Workout data error:", error);

    return (
      <main className="min-h-screen bg-[#0d0f12] text-white flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-[#ccff00] text-sm font-bold uppercase tracking-widest mb-3">
            FitLog
          </p>

          <h1 className="text-2xl md:text-3xl font-bold">
            Unable to load workouts
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Something went wrong while loading the workout data.
          </p>
        </div>
      </main>
    );
  }

  const workout = libraryData.find(
    (item: { id: number }) => item.id === Number(id)
  );

  if (!workout) {
    return (
      <div className="min-h-screen bg-[#0d0f12] text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Workout not found</h1>
      </div>
    );
  }

  return (
    <main className="bg-[#0d0f12] text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left side */}
          <div>
            <Image
              src={workout.image}
              alt={workout.name}
              width={700}
              height={600}
              className="w-full h-[500px] object-cover rounded-xl"
            />
          </div>

          {/* Right side */}
          <div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="text-gray-400 mt-3 leading-relaxed">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2 mt-5">
              {workout.muscleGroups.map((muscle: string) => (
                <span
                  key={muscle}
                  className="bg-[#ccff00] text-black px-4 py-1 rounded-full text-xs font-bold"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Workout Information */}
            <div className="bg-[#15181e] border border-[#252932] rounded-xl mt-5 overflow-hidden">

              {/* Equipment */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-[#252932]">
                <span className="text-xs text-gray-400 font-semibold">
                  EQUIPMENT
                </span>

                <span className="text-sm">
                  {workout.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-[#252932]">
                <span className="text-xs text-gray-400 font-semibold">
                  DIFFICULTY
                </span>

                <span className="text-sm">
                  {workout.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-[#252932]">
                <span className="text-xs text-gray-400 font-semibold">
                  SETS
                </span>

                <span className="text-sm">
                  {workout.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-[#252932]">
                <span className="text-xs text-gray-400 font-semibold">
                  REPS
                </span>

                <span className="text-sm">
                  {workout.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-[#252932]">
                <span className="text-xs text-gray-400 font-semibold">
                  DURATION
                </span>

                <span className="text-sm">
                  {workout.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-[#252932]">
                <span className="text-xs text-gray-400 font-semibold">
                  CALORIES
                </span>

                <span className="text-sm">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex justify-between items-center px-5 py-4">
                <span className="text-xs text-gray-400 font-semibold">
                  RATING
                </span>

                <span className="text-sm">
                  {workout.rating}
                </span>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-7">

              <h2 className="text-lg font-bold mb-4">
                INSTRUCTIONS
              </h2>

              <ol className="space-y-3">
                {workout.instructions.map(
                  (instruction: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm text-gray-400"
                    >
                      <span className="text-gray-300">
                        {index + 1}.
                      </span>

                      <span>
                        {instruction}
                      </span>
                    </li>
                  )
                )}
              </ol>

            </div>

            {/* Buttons */}
            <WorkoutActions workout={workout} />

          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkoutDetails;