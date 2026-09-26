import Link from "next/link";
import Image from "next/image";

const MyPlan = () => {
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

        <div className="grid grid-cols-3 gap-3 md:gap-5 mb-5">

          {/* Exercises */}
          <div className="bg-[#15181e] border border-[#20242c] rounded-lg px-4 py-4">
            <p className="text-[10px] md:text-xs text-gray-500 uppercase">
              Exercises
            </p>

            <p className="text-xl md:text-2xl font-bold text-[#ccff00] mt-2">
              0
            </p>
          </div>


          {/* Minutes */}
          <div className="bg-[#15181e] border border-[#20242c] rounded-lg px-4 py-4">
            <p className="text-[10px] md:text-xs text-gray-500 uppercase">
              Minutes
            </p>

            <p className="text-xl md:text-2xl font-bold mt-2">
              0
            </p>
          </div>

          {/* Calories */}
          <div className="bg-[#15181e] border border-[#20242c] rounded-lg px-4 py-4">
            <p className="text-[10px] md:text-xs text-gray-500 uppercase">
              Calories
            </p>

            <p className="text-xl md:text-2xl font-bold mt-2">
              0
            </p>
          </div>

        </div>


        {/* Tabs */}
        <div className="flex gap-2 mb-4">

          <button className="bg-[#ccff00] text-black px-4 py-2 rounded-md text-xs font-bold">
            Today's Plan
          </button>

          <button className="bg-[#15181e] border border-[#272c35] text-gray-400 px-4 py-2 rounded-md text-xs">
            Saved
          </button>

        </div>


        {/* Empty State */}
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

      </div>

    </main>
  );
};

export default MyPlan;