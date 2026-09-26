"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import { usePlan } from "@/context/planContext";

const Navbar = () => {
  const { plan, saved } = usePlan();

  return (
    <nav className="bg-[#151b23] border-b border-[#242b35]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="navbar min-h-[70px] px-0">

          {/* Left - Logo */}
          <div className="navbar-start gap-2">

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

          {/* Center - Menu */}
          <div className="navbar-center hidden md:flex">

            <ul className="flex items-center gap-8">

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

          {/* Right side  counter */}
          <div className="navbar-end gap-2">

            <Link
              href="/my-plan"
              className="border border-[#2a313b] bg-[#11161c] text-white px-4 py-2 rounded-md text-xs font-semibold hover:border-[#ccff00] transition"
            >
              Plan <span className="text-[#ccff00]">{plan.length}</span>
            </Link>

            <Link
              href="/my-plan"
              className="border border-[#2a313b] bg-[#11161c] text-white px-4 py-2 rounded-md text-xs font-semibold hover:border-[#ccff00] transition"
            >
              Saved <span className="text-[#ccff00]">{saved.length}</span>
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;