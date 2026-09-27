import Link from "next/link";
import Image from "next/image";
import { ILibrary } from "@/types/Librarys.type";

const LibraryCard = ({ libraryData }: { libraryData: ILibrary[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {libraryData.map((library) => (
        <div
          key={library.id}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
        >
          <Image
            src={library.image}
            alt={library.name}
            width={500}
            height={300}
            className="w-full h-52 object-cover"
          />

          <div className="p-5">
            {/* Workout Name */}
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              {library.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">
              {library.description}
            </p>

            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2 mb-4">
              {library.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Workout Info */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500">Equipment</p>
                <p className="font-semibold text-gray-900">
                  {library.equipment}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Difficulty</p>
                <p className="font-semibold text-gray-900">
                  {library.difficulty}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Duration</p>
                <p className="font-semibold text-gray-900">
                  {library.duration} min
                </p>
              </div>

              <div>
                <p className="text-gray-500">Calories</p>
                <p className="font-semibold text-gray-900">
                  {library.caloriesBurned} kcal
                </p>
              </div>
            </div>

            {/* Rating + Button */}
            <div className="flex justify-between items-center mt-5">
              <div className="text-gray-800 font-semibold">
                ⭐ {library.rating}
              </div>

              <Link
                href={`/workout/${library.id}`}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LibraryCard;