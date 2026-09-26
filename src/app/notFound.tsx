
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0d0f12] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">

        <p className="text-[#ccff00] text-sm font-bold uppercase tracking-widest mb-3">
          FitLog
        </p>

        <h1 className="text-7xl md:text-8xl font-black text-[#ccff00]">
          404
        </h1>

        <h2 className="text-xl md:text-2xl font-bold uppercase mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 text-sm md:text-base mt-3">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 bg-[#ccff00] text-black px-6 py-3 rounded-md text-sm font-bold uppercase hover:bg-[#b8e600] transition"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
};

export default NotFound;
