import LibraryCard from "../shared/LibraryCard";

const getLibrarys = async () => {
  const response = await fetch(
    "http://localhost:3000/LibraryData.json"
  );

  const data = await response.json();

  return data;
};

const Library = async () => {
  const libraryData = await getLibrarys();

  return (
    <section className="container mx-auto my-[70px]">

      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          THE LIBRARY
        </h2>

        <p className="text-gray-500">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <LibraryCard libraryData={libraryData} />

    </section>
  );
};

export default Library;