"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import { usePlan } from "@/context/planContext";

const Navbar = () => {
  const { plan, saved } = usePlan();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

       
        <div className="min-h-[70px] flex items-center justify-between">

          {/* Mobile  */}
          <div className="flex items-center gap-3">

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-2xl"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            
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

          
          <div className="hidden md:flex">
            <ul className="flex items-center gap-6 lg:gap-8">

              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[#ccff00] transition"
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className="text-sm text-white hover:text-[#ccff00] transition"
                >
                  My Plan
                </Link>
              </li>

            </ul>
          </div>

          
          <div className="flex items-center gap-2">

            <Link
              href="/my-plan"
              className="border border-[#2a313b] bg-[#11161c] text-white px-3 sm:px-4 py-2 rounded-md text-[11px] sm:text-xs font-semibold hover:border-[#ccff00] transition"
            >
              Plan{" "}
              <span className="text-[#ccff00]">
                {plan.length}
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="border border-[#2a313b] bg-[#11161c] text-white px-3 sm:px-4 py-2 rounded-md text-[11px] sm:text-xs font-semibold hover:border-[#ccff00] transition"
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

              <li>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm text-white hover:text-[#ccff00] transition py-2"
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm text-white hover:text-[#ccff00] transition py-2"
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

