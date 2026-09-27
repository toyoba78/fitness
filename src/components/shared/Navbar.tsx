"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { usePlan } from "@/context/planContext";

const Navbar = () => {
  const { plan, saved } = usePlan();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Navbar */}
        <div className="min-h-[70px] flex items-center justify-between">

          {/* Left side */}
          <div className="flex items-center gap-3">

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-2xl"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="FITLOG"
                width={32}
                height={32}
                className="object-contain"
              />

              <span className="text-white text-lg font-bold tracking-wide">
                FITLOG
              </span>
            </Link>

          </div>

          {/* Center - Navigation */}
          <div className="hidden md:flex">
            <ul className="flex items-center gap-6 lg:gap-8">

              {/* Workouts */}
              <li>
                <Link
                  href="/"
                  className={`text-sm transition ${
                    isHome
                      ? "text-[#ccff00] font-bold"
                      : "text-white hover:text-[#ccff00]"
                  }`}
                >
                  Workouts
                </Link>
              </li>

              {/* My Plan */}
              <li>
                <Link
                  href="/my-plan"
                  className={`text-sm transition ${
                    isMyPlan
                      ? "text-[#ccff00] font-bold"
                      : "text-white hover:text-[#ccff00]"
                  }`}
                >
                  My Plan
                </Link>
              </li>

            </ul>
          </div>

          {/* Right side - Counters */}
          <div className="flex items-center gap-2">

            {/* Plan */}
            <Link
              href="/my-plan"
              className="bg-[#ccff00] text-black px-3 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-bold hover:bg-[#b8e600] transition"
            >
              Plan{" "}
              <span>
                {plan.length}
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              className="border border-[#ccff00] text-white px-3 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold hover:bg-[#ccff00] hover:text-black transition"
            >
              Saved{" "}
              <span className="text-[#ccff00]">
                {saved.length}
              </span>
            </Link>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#242b35] py-4">

            <ul className="flex flex-col gap-3">

              {/* Mobile Workouts */}
              <li>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm transition py-2 ${
                    isHome
                      ? "text-[#ccff00] font-bold"
                      : "text-white hover:text-[#ccff00]"
                  }`}
                >
                  Workouts
                </Link>
              </li>

              {/* Mobile My Plan */}
              <li>
                <Link
                  href="/my-plan"
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm transition py-2 ${
                    isMyPlan
                      ? "text-[#ccff00] font-bold"
                      : "text-white hover:text-[#ccff00]"
                  }`}
                >
                  My Plan
                </Link>
              </li>

            </ul>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;