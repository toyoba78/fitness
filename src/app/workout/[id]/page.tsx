import Image from "next/image";

interface WorkoutDetailsProps {
  params: Promise<{ id: string }>;
}

const WorkoutDetails = async ({ params }: WorkoutDetailsProps) => {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/librarydata.json`,
    {
      cache: "no-store",
    }
  );

  const libraryData = await response.json();

  const workout = libraryData.find(
    (item: { id: number }) => item.id === Number(id)
  );

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{workout.name}</h1>

      <p className="mt-3">{workout.description}</p>

      <Image
        src={workout.image}
        alt={workout.name}
        width={600}
        height={400}
        className="rounded-xl"
      />
    </div>
  );
};

export default WorkoutDetails;