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

            <h3 className="text-xl font-bold mb-2">
              {library.name}
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              {library.description}
            </p>

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

            <div className="grid grid-cols-2 gap-3 text-sm">

              <div>
                <p className="text-gray-400">Equipment</p>
                <p className="font-semibold">
                  {library.equipment}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Difficulty</p>
                <p className="font-semibold">
                  {library.difficulty}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Duration</p>
                <p className="font-semibold">
                  {library.duration} min
                </p>
              </div>

              <div>
                <p className="text-gray-400">Calories</p>
                <p className="font-semibold">
                  {library.caloriesBurned} kcal
                </p>
              </div>

            </div>

            <div className="flex justify-between items-center mt-5">
              <div>⭐ {library.rating}</div>

              <Link
                  href={`/workout/${library.id}`}
                  className="bg-black text-white px-4 py-2 rounded-lg">
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