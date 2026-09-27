import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 py-6 md:py-10">
      <div className="bg-[#151b23] rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          {/* Left side */}
          <div className="px-6 py-10 sm:px-8 md:px-10 lg:px-14 md:py-14">

            <p className="text-[#ccff00] text-xs md:text-sm font-semibold tracking-wider mb-3">
              WORKOUT LIBRARY
            </p>

            <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              TRAIN WITH INTENT.
              <br />
              LOG EVERY SET.
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-6 mt-5 max-w-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            {/* Browse Workouts Button */}
            <a
              href="#library"
              className="inline-flex items-center gap-2 mt-6 bg-[#ccff00] text-black px-5 py-3 rounded-md text-xs md:text-sm font-bold hover:bg-[#b8e600] transition"
            >
              BROWSE WORKOUTS

              <span className="text-base">
                ↓
              </span>
            </a>

          </div>

          {/* Right side */}
          <div className="flex items-center justify-center w-full px-4 pb-6 md:px-0 md:pb-0">
            <Image
              src={bannerImg}
              alt="FitLog workout banner"
              width={700}
              height={500}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;