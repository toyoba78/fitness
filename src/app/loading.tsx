import React from 'react';

const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0d0f12] text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-[#303640] border-t-[#ccff00] rounded-full animate-spin mx-auto"></div>

        <p className="text-gray-400 text-sm mt-4">
          Loading workouts...
        </p>
      </div>
    </main>
  );
};

export default Loading;