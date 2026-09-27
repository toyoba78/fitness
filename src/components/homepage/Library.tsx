import LibraryContent from "./LibraryContent";

const getLibrarys = async () => {
  try {
    const response = await fetch(
  "https://api.api-store.workers.dev/api/fitlog",
  {
    cache: "no-store",
  }
    );

    if (!response.ok) {
      throw new Error("Failed to load library data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Library data error:", error);

    return null;
  }
};

const Library = async () => {
  const libraryData = await getLibrarys();

  if (!libraryData) {
    return (
      <section className="container mx-auto my-[70px] px-4">
        
        <div className="min-h-[300px] bg-[#101318] border border-[#20242c] rounded-lg flex flex-col items-center justify-center text-center">
          <h2 className="text-xl font-bold text-white">
            Unable to load workouts
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Something went wrong while loading the workout library.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="library"
      className="container mx-auto my-[70px]"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          THE LIBRARY
        </h2>

        <p className="text-gray-500">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <LibraryContent libraryData={libraryData} />
    </section>
  );
};

export default Library;